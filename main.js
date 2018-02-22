/*
Reaction-Diffusion System Solver
Author: Gregory Szep, King's College London 2017
Adapted from code by Pablo Márquez Neila
*/

/* global gl:true $*/

// rendering global
var renderStep = 20

// main simulation canvas
function Simulation(canvas) {
	gl = this.getWebGL(canvas)
	this.compileShaders().then( () => {

		// initialise planar mesh
		this.setGeometry()

		// zero initial condition
		this.width = 32; this.height = 32;
		this.pixels = this.wigner()
		this.setBuffer(this.pixels)

		// initialise parameters, interactions
		this.setParameters()
		this.sliders()
		this.mouseEvents()

		// begin simulation
		this.pause = false
		this.renderLoop()
	})
}


// main animation loop
Simulation.prototype.renderLoop = function() {
	if (!this.pause) this.render()
	requestAnimationFrame(this.renderLoop.bind(this))
}


// single animation iteration
Simulation.prototype.render = function() {

	// update parameters
	this.updateParameters()
	this.setSeed()
	this.applyConstraint()

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
	this.parameters = { 'brush': [-1,-1,0,0], 'colors': [],
		'diffusion': [[0.0],[0.00001],[0.00001],[0.00001]],
		'timeStep': 0.0,
	}
}


// TODO(@gszep) factor paramter properties
Simulation.prototype.sliders = function() {
	var that = this

	$('#diffusionRatioSlider').slider({
		value: 0.00001, min: 0, max:0.0001, step:0.00001,

		change: function(event, ui) {
			$('#diffusionRatio').html(ui.value)
			that.parameters.diffusion[1][0] = ui.value

		},

		slide: function(event, ui) {
			$('#diffusionRatio').html(ui.value)
			that.parameters.diffusion[1][0] = ui.value

		}
	})
	$('#diffusionRatioSlider').slider('value',0.00001)

	$('#gridSizeSlider').slider({
		value: 256, min:100 , max:512, step:1,
		change: function(event, ui) {
			$('#gridSize').html(ui.value)
		},

		slide: function(event, ui) {
			$('#gridSize').html(ui.value)

			if (that.textures)
				that.pixels = that.getPixels()
			else
				that.pixels = that.wigner()

			that.width = ui.value; that.height = ui.value;
			that.setBuffer(that.pixels)

			that.parameters.timeStep = 0.0
			$('#timeStepSlider').slider('value', that.parameters.timeStep)
		}
	})
	$('#gridSizeSlider').slider('value', that.height)

	$('#timeStepSlider').slider({
		value: that.parameters.timeStep, min: 0.0, max:0.3, step:0.001,

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

		that.parameters.brush = [
			this.mouseX/parseInt(that.canvas.style.width),
			1-this.mouseY/parseInt(that.canvas.style.height),
			that.brush.radius,event.which]
	}

	this.canvas.onmousemove = function(event) {
		var mouseEvent = event ? event : window.event

		this.mouseX = mouseEvent.pageX - $('#'+that.canvas.id).offset().left
		this.mouseY = mouseEvent.pageY - $('#'+that.canvas.id).offset().top

		if(that.isMouseDown){
			that.parameters.brush = [
				this.mouseX/parseInt(that.canvas.style.width),
				1-this.mouseY/parseInt(that.canvas.style.height),
				that.brush.radius,event.which]
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

		if ( event.code == 'Enter' ) {
			that.pixels = that.getPixels()
			var data = that.pixels[1].filter( (_,index) => {return index%4==0})

			var x = Array.range(data.min(),data.max(),(data.max()-data.min())/100)
			var y = x.map( xi => { return Math.exp(-xi*xi/(2*data.var()))/Math.sqrt(2*that.width*Math.PI)})
			var z = x.map( xi => { return Math.sign(1-xi*xi)*2*Math.sqrt(Math.abs(1-xi*xi))/(10*Math.PI) })
			var pdf = {
				x: x,
				y: y,
				name: 'Equilibrium',
				mode: 'lines',
			}
			var wigner = {
				x: x,
				y: z,
				name: 'Wigner Law',
				mode: 'lines',
			}
			var hist = {
				x: Array.from(data),
				opacity: 0.6,
				name: 'State Distribution',
				type: 'histogram',
				histnorm: 'probability'
			}
			var lambda = {
				x: Array.from(that.lambda),
				opacity: 0.6,
				name: 'Interaction Spectrum',
				type: 'histogram',
				histnorm: 'probability'
			}
			var layout = {
				yaxis: {range: [0, 0.1]},
				xaxis: {range: [-3, 3]},
				barmode: 'overlay'
			}
			var data = [hist,pdf,lambda,wigner];
			Plotly.newPlot('graph', data, layout);
		}
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
	this.pause = true

	if (pixels[0].length/4 != this.width*this.height)
		pixels = this.resize(pixels)

	// create two texture targets per component
	this.setTextures(pixels)

	// create two buffers for alternating frame method
	if (!this.buffer) {
		this.buffer = []

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
	}

	// check for errors
	let status = gl.checkFramebufferStatus(gl.FRAMEBUFFER)
	if (status!=gl.FRAMEBUFFER_COMPLETE)
		throw 'Incomplete Frame Buffer: '+status

	this.pause = false
}


// initialise textures with given pixels
Simulation.prototype.setTextures = function(pixels) {

	// create textures if none exist
	var createTextures = false
	if (!this.textures) {

		this.textures = []
		createTextures = true
	}

	// two targets for frame buffer
	for ( let i = 0; i < 2; i++ ) {
		let textures = []

		// create one texture for each component
		for ( let n = 0; n < this.nComponents; n++ ) {
			if( pixels[n] != undefined ){
				gl.activeTexture(gl.TEXTURE0+n+i*this.nComponents)

				var texture
				if (createTextures) texture = gl.createTexture()
				else texture = this.textures[i][n]

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


// setting zero initial condition
Simulation.prototype.zeros = function() {
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


// setting wigner initial condition
Simulation.prototype.wigner = function() {
	var components = []
	for ( let n = 0; n < this.nComponents; n++ ) {
		let pixels = []

		for(var i = 0; i<this.width; i++) {
			for(var j = 0; j<this.height; j++) {
				let u = random.integer(-1,1)/Math.sqrt(this.width*this.height)
				pixels.push(u,u,u,u)
			}
		}
		components.push(pixels)
	}

	// initialise symmetric gaussian interaction matrix J[i][j]
	let thread = new Lalolab('thread',false,'public/js/lalolib')
	// thread.do('j = randn('+600+','+600+')', () => {
  //
	// 	thread.do('J = ( j+transpose(j) ) ./ sqrt(8*j.n)', interaction => {
	// 		this.interaction = interaction; this.lambda = [-10]
  //
	// 		thread.do('eig(J)', lambda => {
	// 			this.lambda = new Float32Array(lambda)
  //
	// 		})
	// 	})
	// })

	thread.do('j = reshape((new Distribution (Bernoulli, 0.01)).sample(600*600),600,600)-reshape((new Distribution (Bernoulli, 0.01)).sample(600*600),600,600)', () => {

		thread.do('J = sign(j+transpose(j)) ./ sqrt(0.2*j.n)', interaction => {
			this.interaction = interaction; this.lambda = [-10]

			thread.do('eig(J)', lambda => {
				this.lambda = new Float32Array(lambda)

			})
		})
	})

	return components
}


// setting seed for random numbers on gpu
Simulation.prototype.setSeed = function() {
	let pixels = []

	for(var i = 0; i<this.width; i++){
		for(var j = 0; j<this.height; j++) {
			pixels.push(random.integer(2**7+1,2**32-1),
									random.integer(2**7+1,2**32-1),
									random.integer(2**7+1,2**32-1),
									random.integer(2**7+1,2**32-1))
		}
	}

	let components = []; components.length = this.nComponents
	components[0] = pixels
	this.setTextures(components)
}


// apply global constraint
Simulation.prototype.applyConstraint = function() {
	let pixels = this.getPixels(1)
	var Z = pixels.var(4)
	pixels = pixels.map( value => { return value/(1+Z) })

	let components = []; components.length = this.nComponents
	components[1] = pixels
	this.setTextures(components)
}


// get pixel data from components
Simulation.prototype.getPixels = function(index) {
	let data = []

	// create temporary buffer to parse out data
	let dataBuffer = gl.createFramebuffer()
	gl.bindFramebuffer(gl.FRAMEBUFFER,dataBuffer)

	// iterate through components
	for ( let n = 0; n < this.nComponents; n++ ) {
		let pixels = new Float32Array(4*this.width*this.height)

		// bind texture to buffer
		gl.framebufferTexture2D(
			gl.FRAMEBUFFER,gl.COLOR_ATTACHMENT0,gl.TEXTURE_2D,this.textures[1][n],0)

		// write texture pixels to image contexts
		gl.readPixels(0,0,this.width,this.height,gl.RGBA,gl.FLOAT,pixels)
		data.push(pixels)
	}

	gl.deleteFramebuffer(dataBuffer)

	if (index != undefined)
		return data[index]
	else
		return data
}


// resize pixel array with constant interpolation
Simulation.prototype.resize = function(pixels) {
		var components = []

		for ( let n = 0; n < this.nComponents; n++ ) {
			let resized = this.rescalePixels(pixels[n],this.width,this.height)
			components.push(resized.data.map( value => { return value/255 }))
		}
		return components
}


Simulation.prototype.rescalePixels = function(pixels, width, height) {
	let canvas = document.createElement('canvas')

	// view window dimensions
	canvas.width = parseInt(this.canvas.style.width)
	canvas.height = parseInt(this.canvas.style.height)

	// original grid size
	originalWidth = Math.sqrt(pixels.length/4)
	originalHeight = Math.sqrt(pixels.length/4)

	// pass pixel data to html canvas
	var ctx = canvas.getContext('2d')
	var imageData = ctx.createImageData(originalWidth, originalHeight)
	imageData.data.set(pixels.map( value => { return value*255 }))

	// create target canvas
	var target = document.createElement('canvas')
	target.width = canvas.width
	target.height = canvas.height

	// rescale pixels on canvas
	target.getContext("2d").putImageData(imageData,0,0);
	ctx.scale(width/originalWidth,height/originalHeight);
	ctx.drawImage(target,0,0);

  return ctx.getImageData(0,0,width,height);
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


// shader compiler methods
Simulation.prototype.getShader = function(type) {
	var shader

	if (type=='coordinate') {
		shader = gl.createShader(gl.VERTEX_SHADER)
		return load(['solver/coordinate.vert']).then( ([sourceCode]) => {

			gl.shaderSource(shader,sourceCode)
			gl.compileShader(shader)

			// report any errors
			if(!gl.getShaderParameter(shader,gl.COMPILE_STATUS)) {
				throw gl.getShaderInfoLog(shader)
			}

			return shader
		})

	}

	if (type=='integrator') {
		shader = gl.createShader(gl.FRAGMENT_SHADER)

		// compile shader
		return load([
			'solver/integrator.frag',
			'solver/include/integrator/declare.glsl',
			'solver/include/integrator/derivatives.glsl',
			'solver/include/integrator/random.glsl'])
			.then( ([sourceCode,declare,derivatives,random]) => {

			this.nComponents = this.getComponents(declare)
			gl.shaderSource(shader,declare+derivatives+random+sourceCode)
			gl.compileShader(shader)

			// report any errors
			if(!gl.getShaderParameter(shader,gl.COMPILE_STATUS)) {
				throw gl.getShaderInfoLog(shader)
			}

			return shader
		})
	}

	if (type=='painter') {
		shader = gl.createShader(gl.FRAGMENT_SHADER)

		// compile shader
		return load([
			'solver/painter.frag',
			'solver/include/painter/declare.glsl'])
			.then( ([sourceCode,declare]) => {

			gl.shaderSource(shader,declare+sourceCode)
			gl.compileShader(shader)

			// report any errors
			if(!gl.getShaderParameter(shader,gl.COMPILE_STATUS)) {
				throw gl.getShaderInfoLog(shader)
			}

			return shader
		})
	}
}


// compile integrator and painter shaders from glsl code
Simulation.prototype.compileShaders = function() {

	this.integrator  = gl.createProgram()
	this.painter  = gl.createProgram()

	return Promise.all([

		this.getShader('coordinate').then( shader => {
			gl.attachShader(this.integrator, shader)
			gl.attachShader(this.painter, shader)
		}),

		this.getShader('integrator').then( shader => {
			gl.attachShader(this.integrator, shader)
			gl.linkProgram(this.integrator)
		}),

		this.getShader('painter').then( shader => {
			gl.attachShader(this.painter, shader)
			gl.linkProgram(this.painter)
		})
	])
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
