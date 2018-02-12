/*
Reaction-Diffusion System Solver
Author: Gregory Szep, King's College London 2017
Adapted from code by Pablo Márquez Neila
*/

/* global gl:true $*/

// rendering global
var renderStep = 10

// main simulation canvas
function Simulation(canvas,coordinate,integrator,painter) {
	gl = this.getWebGL(canvas)

	// compile glsl shaders and initialise planar mesh
	this.compileShaders(coordinate,integrator,painter)
	this.nComponents = this.getComponents(integrator)
	this.setGeometry()

	// initialise parameters and interactions
	this.setParameters()
	this.sliders()
	this.mouseEvents()

	// initial condition
	this.pixels = this.initialCondition()
	this.setBuffer(this.pixels)

	// begin simulation
	this.renderLoop()
}


// setting initial condition
Simulation.prototype.initialCondition = function() {
	var components = []
	for ( let n = 0; n < this.nComponents; n++ ) {
		let pixels = []

		for(var i = 0; i<this.width; i++)
			for(var j = 0; j<this.height; j++)
				pixels.push(0,0,0,0)

		components.push(pixels)
	}
	return components
}


// main animation loop
Simulation.prototype.renderLoop = function() {
	this.render()
	requestAnimationFrame(this.renderLoop.bind(this))
}


// single animation iteration
Simulation.prototype.render = function() {

	// update parameters
	this.updateParameters()

	// propagate for a given number of steps
	this.propagate()

	// render texture to canvas
	this.display()
}


// propagate textures for given number of timesteps
Simulation.prototype.propagate = function() {
	gl.viewport(0,0,this.width,this.height)
	gl.useProgram(this.integrator)

	// alternate two targets in buffer per step
	renderStep = renderStep % 2 == 0 ? renderStep : renderStep+1
	for ( var i = 0; i < renderStep; ++i ) {

		// compute step, render to next textures in buffer
		gl.bindFramebuffer(gl.FRAMEBUFFER, this.buffer[i%2])
		this.bindComponents(this.integrator,i+1)
		gl.drawArrays(gl.TRIANGLE_STRIP,0,4)

		// remove brush from canvas
		this.resetBrush()
	}
}


// initialise parameters from specifications
Simulation.prototype.setParameters = function() {
	this.parameters = {
		'spaceStep': 10.0, 'timeStep': 0.001,
		'brush': [-1,-1,0,0], 'colors': [],
		'diffusionRatio': 1.0,
	}
}


// TODO(@gszep) factor paramter properties
Simulation.prototype.sliders = function() {
	var that = this

	$('#diffusionRatioSlider').slider({
		value: that.parameters.diffusionRatio, min: 0, max:2, step:0.001,

		change: function(event, ui) {
			$('#diffusionRatio').html(ui.value)
			that.parameters.diffusionRatio = ui.value
		},

		slide: function(event, ui) {
			$('#diffusionRatio').html(ui.value)
			that.parameters.diffusionRatio = ui.value
		}
	})
	$('#diffusionRatioSlider').slider('value', that.parameters.diffusionRatio)

	$('#timeStepSlider').slider({
		value: that.parameters.timeStep, min: 0.001, max:0.21, step:0.001,

		change: function(event, ui) {
			$('#timeStep').html(ui.value)
			that.parameters.timeStep = ui.value
		},

		slide: function(event, ui) {
			$('#timeStep').html(ui.value)
			that.parameters.timeStep = ui.value
		}
	})
	$('#timeStepSlider').slider('value', that.parameters.timeStep)


	$('#spaceStepSlider').slider({
		value: that.parameters.spaceStep, min:0.1 , max:10, step:0.1,

		change: function(event, ui) {
			$('#spaceStep').html(ui.value)
			that.parameters.spaceStep = ui.value
		},

		slide: function(event, ui) {
			$('#spaceStep').html(ui.value)
			that.parameters.spaceStep = ui.value
		}
	})
	$('#spaceStepSlider').slider('value', that.parameters.spaceStep)
}


// mouse events and color gradients
Simulation.prototype.mouseEvents = function() {
	var that = this

	// TODO(@gszep) factor brush properties into json/method
	this.brush = { radius: 0.1 }


	this.canvas.onmouseup = function() {
		that.isMouseDown = false
	}

	this.canvas.onmousedown = function(event) {
		that.isMouseDown = true
		var component

		if (event.which == 1)
			component = 0

		if (event.which == 2)
			component = 1

		if (event.which == 3)
			component = 2

		that.parameters.brush = [
			this.mouseX/parseInt(that.canvas.style.width),
			1-this.mouseY/parseInt(that.canvas.style.height),
			that.brush.radius,component]
	}

	this.canvas.onmousemove = function(event) {
		var mouseEvent = event ? event : window.event
		var component

		this.mouseX = mouseEvent.pageX - $('#'+that.canvas.id).offset().left
		this.mouseY = mouseEvent.pageY - $('#'+that.canvas.id).offset().top

		if (event.which == 1)
			component = 0

		if (event.which == 2)
			component = 1

		if (event.which == 3)
			component = 2

		if(that.isMouseDown){
			that.parameters.brush = [
				this.mouseX/parseInt(that.canvas.style.width),
				1-this.mouseY/parseInt(that.canvas.style.height),
				that.brush.radius,component]
		}
	}

	// use mousewheel to change brush radius
	this.canvas.onmousewheel = function(event) {
		var delta = event.wheelDelta ? event.wheelDelta : -event.detail
		var radius = that.brush.radius + delta/10000

		that.brush.radius = radius > 0 ? radius : 0.01
	}

	// TODO(@gszep) use number keys for selecting components
	window.onkeydown = function(event) {
		event.preventDefault()

		if ( event.code == 'Enter' )
			that.pixels = that.getPixels()
		if ( event.code == 'Space' ){
			that.setBuffer(that.pixels)
		}
	}

	// bind gradient widget to colors in painter
	$('#gradient').gradient('setUpdateCallback',function () { that.updateColors() })
	this.updateColors()

	// prevent context menue from opening on right-click
	this.canvas.oncontextmenu = function (event) { event.preventDefault() }
}


// pass updated parameter values to shaders
Simulation.prototype.updateParameters = function() {

	// itegrate through shaders
	['this.integrator','this.painter'].forEach( program => {
		gl.useProgram(eval(program))

		// iterate through parameter list
		for (let key in this.parameters){
			let parameter = this.parameters[key]

			// pass in scalars
			if (typeof parameter === 'number')
				eval('gl.uniform1f(gl.getUniformLocation('+
				program+', key), parameter)')

			if (Array.isArray(parameter)) {
				let value = parameter[0]

				// pass in vectors
				if (typeof value === 'number')
					eval('gl.uniform'+parameter.length+
						'fv(gl.getUniformLocation('+
						program+', key), parameter)')

				// pass in matricies
				if (Array.isArray(value))
					for ( let i = 0; i < parameter.length; i++ )
						eval('gl.uniform'+value.length+
							'fv(gl.getUniformLocation('+program+', key+"['+i+']"), parameter['+i+'])')
			}
		}
	})
}


// update color gradient used to paint results
Simulation.prototype.updateColors = function() {
	var colors = $('#gradient').gradient('getValuesRGBS')

	for( let i=0; i<colors.length; i++) {
		this.parameters.colors[i] = colors[i]
	}
}


// remove perturbation brush
Simulation.prototype.resetBrush = function() {
	this.parameters.brush = [-1,-1,0,0]
}


// initialise frame buffers with given component pixels[n]
Simulation.prototype.setBuffer = function(pixels) {
	this.buffer = []

	// create two texture targets per component
	this.setTextures(pixels)

	// create two buffers for alternating frame method
	for ( let i = 0; i < 2; i++ ) {

		let buffer = gl.createFramebuffer()
		gl.bindFramebuffer(gl.FRAMEBUFFER,buffer)

		// bind component textures to frame buffers
		for ( let n = 0; n < this.nComponents; n++ ) {
			gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0+n,
				gl.TEXTURE_2D, this.textures[i][n], 0)
		}
		this.buffer.push(buffer)
	}

	// bind component textures to painter program
	gl.useProgram(this.painter)
	this.bindComponents(this.painter,1)

	// check for errors
	let status = gl.checkFramebufferStatus(gl.FRAMEBUFFER)
	if (status!=gl.FRAMEBUFFER_COMPLETE)
		throw 'Incomplete Frame Buffer: '+status
}


// initialise textures with given pixels
Simulation.prototype.setTextures = function(pixels) {
	this.textures = []

	// two targets for frame buffer
	for ( let i = 0; i < 2; i++ ) {
		let textures = []

		// create one texture for each component
		for ( let n = 0; n < this.nComponents; n++ ) {
			gl.activeTexture(gl.TEXTURE0+n+i*this.nComponents)

			let texture = gl.createTexture()
			gl.bindTexture(gl.TEXTURE_2D, texture)
			gl.pixelStorei(gl.UNPACK_ALIGNMENT,1)

			// initialise texture pixels with data
			gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA32F, this.width, this.height, 0,
				gl.RGBA, gl.FLOAT, new Float32Array(pixels[n]))

				// texture properties
				gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST)
				gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST)

			textures.push(texture)
		}
		this.textures.push(textures)
	}
}


// set pointers from indexed buffer to uniforms in given program
Simulation.prototype.bindComponents = function(program,bufferIndex) {
	let attachments = []

	for ( let n = 0; n < this.nComponents; n++ ) {
		attachments.push(gl.COLOR_ATTACHMENT0+n)

		gl.uniform1i(gl.getUniformLocation(program, 'component['+n+']'), n+(bufferIndex%2)*this.nComponents)
	}

	// set multiple render targets
	gl.drawBuffers(attachments)
}


// get pixel data from components
Simulation.prototype.getPixels = function() {

	var width = Math.ceil(this.width)
	var height = Math.ceil(this.height)
	let data = []

	// create temporary buffer to parse out data
	let dataBuffer = gl.createFramebuffer()
	gl.bindFramebuffer(gl.FRAMEBUFFER,dataBuffer)

	// iterate through components
	for ( let n = 0; n < this.nComponents; n++ ) {
		let pixels = new Float32Array(4*width*height)

		// bind texture to buffer
		gl.framebufferTexture2D(
			gl.FRAMEBUFFER,gl.COLOR_ATTACHMENT0,gl.TEXTURE_2D,this.textures[1][n],0)

		// write texture pixels to image contexts
		gl.readPixels(0,0,width,height,gl.RGBA,gl.FLOAT,pixels)
		data.push(pixels)
	}

	gl.deleteFramebuffer(dataBuffer)
	return data
}


// initialise mesh geomerty to render onto
Simulation.prototype.setGeometry = function() {
	let vertexIndex = gl.getAttribLocation(this.integrator, 'vertexCoordinate')

	// populate coordinate buffer with four vertexes
	gl.enableVertexAttribArray(vertexIndex)
	var xy = new Float32Array([-1,-1, 1,-1, -1,1, 1,1])

	gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer())
	gl.bufferData(gl.ARRAY_BUFFER,xy,gl.STATIC_DRAW)

	// attach coordinate buffer to shaders
	gl.vertexAttribPointer(vertexIndex,2,gl.FLOAT,gl.FALSE,0,0)
}


// show with component to color map
Simulation.prototype.display = function() {
	gl.viewport(0,0,
		parseInt(this.canvas.style.width),
		parseInt(this.canvas.style.height))

	gl.useProgram(this.painter)

	gl.bindFramebuffer(gl.FRAMEBUFFER,null)
	gl.drawArrays(gl.TRIANGLE_STRIP,0,4)
}


// setup WebGL 2.0 environment
Simulation.prototype.getWebGL = function(canvas) {
	this.canvas = document.getElementById(canvas)
	var gl = this.canvas.getContext('webgl2')

	if (!window.WebGLRenderingContext || !gl ){
		alert('WebGL 2.0 not supported'); return }

	// import extensions
	gl.getExtension('EXT_color_buffer_float')

	// store dimensions
	this.width = gl.drawingBufferWidth
	this.height = gl.drawingBufferHeight

	return gl
}


// shader compiler method
Simulation.prototype.getShader = function(sourceCode,type) {
	var shader

	if (type=='vertex')
		shader = gl.createShader(gl.VERTEX_SHADER)
	if (type=='fragment')
		shader = gl.createShader(gl.FRAGMENT_SHADER)

	// compile shader
	gl.shaderSource(shader,sourceCode)
	gl.compileShader(shader)

	// report any errors
	if(!gl.getShaderParameter(shader,gl.COMPILE_STATUS)) {
		throw gl.getShaderInfoLog(shader)
	}

	return shader
}


// compile integrator and painter shaders from glsl code
Simulation.prototype.compileShaders = function(coordinate,integrator,painter) {

	let locate = this.getShader(coordinate,'vertex')
	let integrate = this.getShader(integrator,'fragment')
	let paint = this.getShader(painter,'fragment')

	this.integrator  = gl.createProgram()
	this.painter  = gl.createProgram()

	gl.attachShader(this.integrator, locate)
	gl.attachShader(this.painter, locate)

	gl.attachShader(this.integrator, integrate)
	gl.attachShader(this.painter, paint)

	gl.linkProgram(this.integrator)
	gl.linkProgram(this.painter)
}


// extract number of components from glsl code
Simulation.prototype.getComponents = function(integrator) {

	// use regex to extract number of components from code
	var integratorRegex = integrator.match('NCOMPONENTS ([0-9])+')

	// check if component keyword is present
	if (integratorRegex) {

		var integratorComponents = integratorRegex[0].match('([0-9])+')[0]
		return integratorComponents
	}
	else {
		throw 'no "#define NCOMPONENTS" declaration found in solver code'
	}
}
