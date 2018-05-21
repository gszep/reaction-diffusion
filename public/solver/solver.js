/*
Reaction-Diffusion System Solver
Author: Gregory Szep, King's College London 2017
Adapted from code by Pablo Márquez Neila
*/

/* dependencies located in public/js */
/* global gl:true $ random load jupyter */

// rendering global
var renderStep = 20
xRot = 0; yRot = 0
xOffs = 0; yOffs = 0

// main simulation canvas
function Simulation(canvas) {
	gl = this.getWebGL(canvas)
	this.compileShaders().then( () => {

		// initialise planar mesh
		this.setGeometry()

		// zero initial condition
		this.width = 256; this.height = 256
		this.pixels = this.zeros()
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
		'timeStep': 0.0, 'noise': 0.0
	}
}


// TODO(@gszep) factor paramter properties
Simulation.prototype.sliders = function() {
	var that = this

	$('#diffusionRatioSlider').slider({
		value: 1.0, min: 0, max:2, step:0.001,

		change: function(event, ui) {
			$('#diffusionRatio').html(ui.value)
			that.parameters.diffusion[3][0] = ui.value * that.parameters.diffusion[1][0]

		},

		slide: function(event, ui) {
			$('#diffusionRatio').html(ui.value)
			that.parameters.diffusion[3][0] = ui.value * that.parameters.diffusion[1][0]

		}
	})
	$('#diffusionRatioSlider').slider('value',1.0)

	$('#noiseSlider').slider({
		value: 0.0, min: 0.0, max:10.0, step:0.001,

		change: function(event, ui) {
			$('#noise').html(ui.value)
			that.parameters.noise = ui.value

		},

		slide: function(event, ui) {
			$('#noise').html(ui.value)
			that.parameters.noise = ui.value

		}
	})
	$('#noiseSlider').slider('value',0.0)

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
				that.pixels = that.zeros()

			that.width = ui.value; that.height = ui.value
			that.setBuffer(that.pixels)

			that.parameters.timeStep = 0.0
			$('#timeStepSlider').slider('value', that.parameters.timeStep)
		}
	})
	$('#gridSizeSlider').slider('value', that.height)

	$('#timeStepSlider').slider({
		value: that.parameters.timeStep, min: 0.0, max:0.5, step:0.001,

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

	// TODO(@gszep) factor brush properties into json/method.. mess!!
	this.brush = { radius: 0.1 }


	this.canvas.onmouseup = function(event) {
		that.isMouseDown = false
		xOffs = event.clientX;  yOffs = event.clientY
	}

	this.canvas.onmousedown = function(event) {
		that.isMouseDown = true
		xOffs = event.clientX; yOffs = event.clientY

		that.parameters.brush = [
			2*this.mouseX/parseInt(that.canvas.style.width),
			1-this.mouseY/parseInt(that.canvas.style.height),
			that.brush.radius,event.which]
	}

	this.canvas.onmousemove = function(event) {
		var mouseEvent = event ? event : window.event

		this.mouseX = mouseEvent.pageX - $('#'+that.canvas.id).offset().left
		this.mouseY = mouseEvent.pageY - $('#'+that.canvas.id).offset().top

		if(that.isMouseDown){
			that.parameters.brush = [
				2*this.mouseX/parseInt(that.canvas.style.width),
				1-this.mouseY/parseInt(that.canvas.style.height),
				that.brush.radius,event.which]
		}

		if (!that.isMouseDown) return;
		if (event.shiftKey) {
			transl *= 1 + (event.clientY-yOffs)/300
			yRot = - xOffs + event.clientX
		}
		else {
			 yRot = - xOffs + event.clientX
			 xRot = - yOffs + event.clientY
		}
		xOffs = event.clientX
		yOffs = event.clientY
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
			jupyter.setData(that.pixels)
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


// TODO calling getUniformLocation on every update is inefficient
Simulation.prototype.updateParameters = function() {

	// itegrate through shaders
	['this.integrator','this.painter','this.phase'].forEach( program => {
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

		gl.useProgram(this.phase)
		this.bindComponents(this.phase,1)
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

	// TODO initialise symmetric gaussian interaction matrix J[i][j]

	return components
}


// setting seed for random numbers on gpu
Simulation.prototype.setSeed = function() {
	let pixels = []

	for(var i = 0; i<this.width; i++){
		for(var j = 0; j<this.height; j++) {
			pixels.push(random.integer(Math.pow(2,7)+1,Math.pow(2,32)-1),
				random.integer(Math.pow(2,7)+1,Math.pow(2,32)-1),
				random.integer(Math.pow(2,7)+1,Math.pow(2,32)-1),
				random.integer(Math.pow(2,7)+1,Math.pow(2,32)-1))
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
	pixels = pixels.map( value => { return value/Math.sqrt(Z) })

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
	var originalWidth = Math.sqrt(pixels.length/4)
	var originalHeight = Math.sqrt(pixels.length/4)

	// pass pixel data to html canvas
	var ctx = canvas.getContext('2d')
	var imageData = ctx.createImageData(originalWidth, originalHeight)
	imageData.data.set(pixels.map( value => { return value*255 }))

	// create target canvas
	var target = document.createElement('canvas')
	target.width = canvas.width
	target.height = canvas.height

	// rescale pixels on canvas
	target.getContext('2d').putImageData(imageData,0,0)
	ctx.scale(width/originalWidth,height/originalHeight)
	ctx.drawImage(target,0,0)

	return ctx.getImageData(0,0,width,height)
}


// initialise mesh geomerty to render onto
Simulation.prototype.setGeometry = function() {
	this.setSpace()
	this.setPhase()
}


// setup real space
Simulation.prototype.setSpace = function() {
	let vertexIndex = gl.getAttribLocation(this.integrator, 'vertexCoordinate')

	// populate realspace coordinate buffer with four vertexes
	gl.enableVertexAttribArray(vertexIndex)
	var vertices = new Float32Array([-1,-1, 1,-1, -1,1, 1,1])

	// attach coordinate buffer to shaders
	gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer())
	gl.bufferData(gl.ARRAY_BUFFER,vertices,gl.STATIC_DRAW)
	gl.vertexAttribPointer(vertexIndex,2,gl.FLOAT,gl.FALSE,0,0)
}


// setup phase space
Simulation.prototype.setPhase = function() {
	gl.bindAttribLocation(this.phase, 2, "location")
	gl.linkProgram(this.phase); gl.useProgram(this.phase)

	// populate phasespace coordinate buffer with vertexes
	gl.enableVertexAttribArray(2)
	var vertices = new Float32Array(2*this.width*this.height)
	for ( var y=0, i=0; y<1; y+=4/this.height ) {
		for ( var x=0; x<1; x+=4/this.width ) {
			vertices[i++] = x;  vertices[i++] = y;
		}
	}

	// attach coordinate buffer to shaders
	gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer())
	gl.bufferData(gl.ARRAY_BUFFER,vertices,gl.STATIC_DRAW)
	gl.vertexAttribPointer(2,2,gl.FLOAT,gl.FALSE,0,0)

	// view rotation matrix
	rotMat = new CanvasMatrix4()
	rotMat.makeIdentity()
}


// show with component to color map
Simulation.prototype.display = function() {

	gl.scissor(0,0,
		parseInt(this.canvas.style.width)/2,
		parseInt(this.canvas.style.height))
	gl.viewport(0,0,
		parseInt(this.canvas.style.width)/2,
		parseInt(this.canvas.style.height))

	// plot in real space
	gl.useProgram(this.painter)
	gl.bindFramebuffer(gl.FRAMEBUFFER,null)
	gl.drawArrays(gl.TRIANGLE_STRIP,0,4)

	gl.scissor(parseInt(this.canvas.style.width)/2,0,
		parseInt(this.canvas.style.width)/2,
		parseInt(this.canvas.style.height))
	gl.viewport(parseInt(this.canvas.style.width)/2,0,
		parseInt(this.canvas.style.width)/2,
		parseInt(this.canvas.style.height))

	// plot in phase space
	gl.useProgram(this.phase)

	rotMat.rotate(xRot/3, 1,0,0);  rotMat.rotate(yRot/3, 0,1,0);
  yRot = 0;  xRot = 0;

	gl.uniform3f(gl.getUniformLocation(this.phase,"RotX"),
		rotMat.m11, rotMat.m21, rotMat.m31 )
	gl.uniform3f(gl.getUniformLocation(this.phase,"RotY"),
		rotMat.m12, rotMat.m22, rotMat.m32 )

	gl.bindFramebuffer(gl.FRAMEBUFFER,null)
	gl.drawArrays(gl.POINTS, 0, this.width*this.height)

  // rotMat.rotate(xRot/3, 1,0,0);  rotMat.rotate(yRot/3, 0,1,0);
  // yRot = 0;  xRot = 0;

  //gl.clear(gl.COLOR_BUFFER_BIT)
  // gl.uniform3f( xLoc, rotMat.m11, rotMat.m21, rotMat.m31 );
  // gl.uniform3f( yLoc, rotMat.m12, rotMat.m22, rotMat.m32 );

  // if(setScale){
  //   gl.uniform2f( pLoc, scale, alpha );
  //   setScale = false;}
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

	if (type=='phasecoordinate') {
		shader = gl.createShader(gl.VERTEX_SHADER)

		return load([
			'solver/phasecoordinate.vert',
			'solver/include/phase/declare.glsl'])
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

	if (type=='integrator') {
		shader = gl.createShader(gl.FRAGMENT_SHADER)

		// TODO this is a mess.. fix it!
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
				if(!gl.getShaderParameter(shader,gl.COMPILE_STATUS))
					throw gl.getShaderInfoLog(shader)

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
				if(!gl.getShaderParameter(shader,gl.COMPILE_STATUS))
					throw gl.getShaderInfoLog(shader)

				return shader
			})
	}

	if (type=='phasepainter') {
		shader = gl.createShader(gl.FRAGMENT_SHADER)

		// compile shader
		return load([
			'solver/phasepainter.frag',
			'solver/include/painter/declare.glsl'])
			.then( ([sourceCode,declare]) => {

				gl.shaderSource(shader,declare+sourceCode)
				gl.compileShader(shader)

				// report any errors
				if(!gl.getShaderParameter(shader,gl.COMPILE_STATUS))
					throw gl.getShaderInfoLog(shader)

				return shader
			})
	}
}


// compile integrator and painter shaders from glsl code
Simulation.prototype.compileShaders = function() {

	this.integrator = gl.createProgram()
	this.painter = gl.createProgram()
	this.phase  = gl.createProgram()

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
		}),

		this.getShader('phasecoordinate').then( shader => {
			gl.attachShader(this.phase, shader)
		}),

		this.getShader('phasepainter').then( shader => {
			gl.attachShader(this.phase, shader)
			gl.linkProgram(this.phase)
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


CanvasMatrix4=function(m) {
  this.makeIdentity()
}

CanvasMatrix4.prototype.makeIdentity=function(){
  this.m11=1;this.m12=0;this.m13=0;this.m14=0;
  this.m21=0;this.m22=1;this.m23=0;this.m24=0;
  this.m31=0;this.m32=0;this.m33=1;this.m34=0;
  this.m41=0;this.m42=0;this.m43=0;this.m44=1
}

CanvasMatrix4.prototype.rotate=function(angle,x,y,z){
  angle=angle/180*Math.PI;angle/=2;
  var sinA=Math.sin(angle);
  var cosA=Math.cos(angle);
  var sinA2=sinA*sinA;
  var length=Math.sqrt(x*x+y*y+z*z);
  if(length==0){x=0;y=0;z=1}
  else if(length!=1){x/=length;y/=length;z/=length}
  var mat=new CanvasMatrix4();
  if(x==1&&y==0&&z==0){
    mat.m11=1;mat.m12=0;mat.m13=0;
    mat.m21=0;mat.m22=1-2*sinA2;mat.m23=2*sinA*cosA;
    mat.m31=0;mat.m32=-2*sinA*cosA;mat.m33=1-2*sinA2;
    mat.m14=mat.m24=mat.m34=0;
    mat.m41=mat.m42=mat.m43=0;
    mat.m44=1
  }
  else if(x==0&&y==1&&z==0){
    mat.m11=1-2*sinA2;mat.m12=0;mat.m13=-2*sinA*cosA;
    mat.m21=0;mat.m22=1;mat.m23=0;mat.m31=2*sinA*cosA;
    mat.m32=0;mat.m33=1-2*sinA2;
    mat.m14=mat.m24=mat.m34=0;
    mat.m41=mat.m42=mat.m43=0;
    mat.m44=1
  }
  else if(x==0&&y==0&&z==1){
    mat.m11=1-2*sinA2;mat.m12=2*sinA*cosA;mat.m13=0;
    mat.m21=-2*sinA*cosA;mat.m22=1-2*sinA2;mat.m23=0;
    mat.m31=0;mat.m32=0;mat.m33=1;
    mat.m14=mat.m24=mat.m34=0;
    mat.m41=mat.m42=mat.m43=0;
    mat.m44=1
  }
  else{
    var x2=x*x;var y2=y*y;var z2=z*z;
    mat.m11=1-2*(y2+z2)*sinA2;
    mat.m12=2*(x*y*sinA2+z*sinA*cosA);
    mat.m13=2*(x*z*sinA2-y*sinA*cosA);
    mat.m21=2*(y*x*sinA2-z*sinA*cosA);
    mat.m22=1-2*(z2+x2)*sinA2;
    mat.m23=2*(y*z*sinA2+x*sinA*cosA);
    mat.m31=2*(z*x*sinA2+y*sinA*cosA);
    mat.m32=2*(z*y*sinA2-x*sinA*cosA);
    mat.m33=1-2*(x2+y2)*sinA2;
    mat.m14=mat.m24=mat.m34=0;
    mat.m41=mat.m42=mat.m43=0;
    mat.m44=1
  }
  this.multRight(mat)
}

CanvasMatrix4.prototype.multRight=function(mat){
  var m11=(this.m11*mat.m11+this.m12*mat.m21+this.m13*mat.m31+this.m14*mat.m41);
  var m12=(this.m11*mat.m12+this.m12*mat.m22+this.m13*mat.m32+this.m14*mat.m42);
  var m13=(this.m11*mat.m13+this.m12*mat.m23+this.m13*mat.m33+this.m14*mat.m43);
  var m14=(this.m11*mat.m14+this.m12*mat.m24+this.m13*mat.m34+this.m14*mat.m44);
  var m21=(this.m21*mat.m11+this.m22*mat.m21+this.m23*mat.m31+this.m24*mat.m41);
  var m22=(this.m21*mat.m12+this.m22*mat.m22+this.m23*mat.m32+this.m24*mat.m42);
  var m23=(this.m21*mat.m13+this.m22*mat.m23+this.m23*mat.m33+this.m24*mat.m43);
  var m24=(this.m21*mat.m14+this.m22*mat.m24+this.m23*mat.m34+this.m24*mat.m44);
  var m31=(this.m31*mat.m11+this.m32*mat.m21+this.m33*mat.m31+this.m34*mat.m41);
  var m32=(this.m31*mat.m12+this.m32*mat.m22+this.m33*mat.m32+this.m34*mat.m42);
  var m33=(this.m31*mat.m13+this.m32*mat.m23+this.m33*mat.m33+this.m34*mat.m43);
  var m34=(this.m31*mat.m14+this.m32*mat.m24+this.m33*mat.m34+this.m34*mat.m44);
  var m41=(this.m41*mat.m11+this.m42*mat.m21+this.m43*mat.m31+this.m44*mat.m41);
  var m42=(this.m41*mat.m12+this.m42*mat.m22+this.m43*mat.m32+this.m44*mat.m42);
  var m43=(this.m41*mat.m13+this.m42*mat.m23+this.m43*mat.m33+this.m44*mat.m43);
  var m44=(this.m41*mat.m14+this.m42*mat.m24+this.m43*mat.m34+this.m44*mat.m44);

  this.m11=m11;this.m12=m12;this.m13=m13;this.m14=m14;
  this.m21=m21;this.m22=m22;this.m23=m23;this.m24=m24;
  this.m31=m31;this.m32=m32;this.m33=m33;this.m34=m34;
  this.m41=m41;this.m42=m42;this.m43=m43;this.m44=m44
}
