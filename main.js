/*
Reaction-Diffusion System Solver
Author: Gregory Szep, King's College London 2017
Adapted from code by Pablo Márquez Neila
*/

/* global THREE loadSolver:true $ jQuery gl:true */
/* exported loadSolver*/

// Configuration.
var diffusionRatio = 1.0
var timeStep = 0.001

// main simulation canvas
function Simulation(canvas,coordinate,integrator,painter) {

	this.canvas = $(canvas).get(0)
	gl = this.canvas.getContext('webgl')

	this.width = $(canvas).width()
	this.height = $(canvas).height()

	this.spaceStep = 1.0
	this.renderStep = 20

	// initialise view and materials from glsl code
	this.nComponents = this.getComponents(integrator)
	this.materials(coordinate,integrator,painter)
	this.view()

	// initialise interactions
	this.sliders()
	this.mouseEvents()

	// begin simulation
	this.initialCondition()
	this.renderLoop()
}

// setting initial condition
Simulation.prototype.initialCondition = function() {

}

// main animation loop
Simulation.prototype.renderLoop = function() {
	this.render()
	requestAnimationFrame(this.renderLoop.bind(this))
}

// single animation iteration
Simulation.prototype.render = function() {

	// update parameters
	this.uniforms.diffusionRatio.value = diffusionRatio
	this.uniforms.timeStep.value = timeStep

	// propagate materials for a given number of steps
	this.propagate()

	// render display material
	this.display()
}


// propagate materials for given number of timesteps
Simulation.prototype.propagate = function() {

	// set mesh to use integrator
	this.mesh.material = this.integrator

	// alternate two targets in buffer per step
	this.renderStep = this.renderStep % 2 == 0 ? this.renderStep : this.renderStep+1
	for ( var i = 0; i < this.renderStep; ++i ) {

		// swap in current components from buffer
		this.updateComponents(this.buffer[i%2])

		// compute step, render to next components in buffer
		this.renderer.render(this.scene, this.camera, this.buffer[(i+1)%2], true)

		// update user perturbation properties
		this.updateBrush()
	}
}

Simulation.prototype.readData = function() {

	var width = this.width/this.spaceStep
	var height = this.height/this.spaceStep
	var components = []

	// create temporary buffer to parse out data
	let dataBuffer = gl.createFramebuffer()
	gl.bindFramebuffer(gl.FRAMEBUFFER,dataBuffer)
	var pixels = new Float32Array(4*width*height)

	// iterate through components
	for ( let i = 0; i < this.nComponents; i++ ) {
		let component = this.uniforms.component.value[i]
		var texture = this.renderer.properties.get(component)

		// bind texture to buffer
		gl.framebufferTexture2D(
			gl.FRAMEBUFFER,gl.COLOR_ATTACHMENT0,gl.TEXTURE_2D,texture.__webglTexture,0)

		// write first channel of texture pixels to array
		gl.readPixels(0,0,width,height,gl.RGBA,gl.FLOAT,pixels)
		components.push(
			pixels.filter( function(value, index) {
				return index % 4 == 0
			})
		)
	}

	console.log(components)
	gl.deleteFramebuffer(dataBuffer)
}


// transfer components from buffer to uniforms for next update
Simulation.prototype.updateComponents = function(buffer) {

	for ( let i = 0; i < this.nComponents; i++ ) {
		this.uniforms.component.value[i] = buffer.attachments[i]
	}
}


// update perturbation brush
Simulation.prototype.updateBrush = function() {
	this.uniforms.brush.value = new THREE.Vector4(-1,-1,0,0)
}


// initialise uniforms, shaders and materials
Simulation.prototype.materials = function(coordinate,integrator,painter) {

	// unifroms holds the set of variables and parameters
	this.uniforms = this.uniforms()

	// compute material plays the role of integrator on gpu
	this.integrator = new THREE.ShaderMaterial({

		// pass in variables and parameters
		uniforms: this.uniforms,
		defines: { NCOMPONENTS: this.nComponents },

		// pass integration code
		vertexShader: coordinate,
		fragmentShader: integrator,

		// required for multiple target rendering
		extensions: { drawBuffers: true}
	})

	// prevent automatic blending
	this.integrator.blending = 0

	// display material renders the components in rgb format
	this.painter = new THREE.ShaderMaterial({

		// pass components and colors for mapping
		uniforms: {
			component: {type: 'tv', value: this.uniforms.component.value },
			color: {type: 'v4v', value: this.uniforms.color.value }
		},

		// let the painter know how many components we have
		defines: { NCOMPONENTS: this.nComponents },

		// pass components to color mapping code
		vertexShader: coordinate,
		fragmentShader: painter,
	})
}


// initialises unifrom for materials
Simulation.prototype.uniforms = function() {
	return {

		// spacetime parameters
		timeStep: {type: 'f', value: timeStep },
		spaceStep: {type: 'v2', value:

			new THREE.Vector2(
				this.spaceStep/this.width,
				this.spaceStep/this.height)
		},

		// components and color variables
		component: {type: 'tv', value: [] },
		color: {type: 'v4v', value: [] },

		// TODO(@gszep) factor paramter properties
		diffusionRatio: {type: 'f', value: diffusionRatio },
		brush: {type: 'v4', value: new THREE.Vector4(-1,-1,0,0)}
	}
}


// view and rendering engine
Simulation.prototype.view = function() {

	// load rendering engine
	this.renderer = new THREE.WebGLRenderer({
		canvas: this.canvas,
		premultipliedAlpha : false,
		preserveDrawingBuffer: true })
	this.renderer.setSize(this.width, this.height)

	// initialise render buffers
	this.buffer()

	// initialise camera angle to be rendered
	this.scene = new THREE.Scene()
	this.camera = new THREE.OrthographicCamera(-0.5,0.5,0.5,-0.5,-10,100)

	// create plane mesh geomerty, add it to scene
	this.geometry = new THREE.PlaneGeometry(1.0, 1.0)
	this.mesh = new THREE.Mesh(this.geometry)
	this.scene.add(this.mesh)
}


// initialise frame buffers
Simulation.prototype.buffer = function() {
	this.buffer = []

	// alternate two targets for frame buffer
	for ( let i = 0; i < 2; i++ ) {

		let target = new THREE.WebGLMultiRenderTarget(
			this.width/this.spaceStep, this.height/this.spaceStep, {
				format: THREE.RGBAFormat, type: THREE.FloatType })

		// periodic boundary conditions
		target.texture.wrapS = THREE.RepeatWrapping
		target.texture.wrapT = THREE.RepeatWrapping

		// two render targets per component in system
		for ( let i = 0; i < this.nComponents-1; i++ ) {
			target.attachments.push(target.texture.clone())
		}

		this.buffer.push(target)
	}
}


// TODO(@gszep) factor paramter properties
Simulation.prototype.sliders = function() {

	$('#diffusionRatioSlider').slider({
		value: diffusionRatio, min: 0, max:2, step:0.001,

		change: function(event, ui) {
			$('#diffusionRatio').html(ui.value)
			diffusionRatio = ui.value
		},

		slide: function(event, ui) {
			$('#diffusionRatio').html(ui.value)
			diffusionRatio = ui.value
		}
	})

	$('#diffusionRatioSlider').slider('value', diffusionRatio)

	$('#timeStepSlider').slider({
		value: timeStep, min: 0.001, max:0.21, step:0.001,

		change: function(event, ui) {
			$('#timeStep').html(ui.value)
			timeStep = ui.value
		},

		slide: function(event, ui) {
			$('#timeStep').html(ui.value)
			timeStep = ui.value
		}
	})

	$('#timeStepSlider').slider('value', timeStep)
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

		that.uniforms.brush.value = new THREE.Vector4(
			this.mouseX/$('#'+that.canvas.id).width(),
			1-this.mouseY/$('#'+that.canvas.id).height(),
			that.brush.radius,component
		)
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
			that.uniforms.brush.value = new THREE.Vector4(
				this.mouseX/$('#'+that.canvas.id).width(),
				1-this.mouseY/$('#'+that.canvas.id).height(),
				that.brush.radius,component
			)
		}
	}

	// use mousewheel to change brush radius
	this.canvas.onmousewheel = function(event) {
		var delta = event.wheelDelta ? event.wheelDelta : -event.detail
		var radius = that.brush.radius + delta/10000

		that.brush.radius = radius > 0 ? radius : 0.01
	}

	// TODO(@gszep) use number keys for selecting components
	window.onkeydown = function() {
		if ( event.code == 'Enter' )
			that.readData()
	}

	// bind gradient widget to colors in painter
	$('#gradient').gradient('setUpdateCallback',function () { that.updateColors() })
	this.updateColors()

	// prevent context menue from opening on right-click
	this.canvas.oncontextmenu = function (event) { event.preventDefault() }
}


// update color gradient used to paint results
Simulation.prototype.updateColors = function() {
	var colors = $('#gradient').gradient('getValuesRGBS')

	for( let i=0; i<colors.length; i++) {
		var [r,g,b,a] = colors[i]
		this.uniforms.color.value[i] = new THREE.Vector4(r,g,b,a)
	}
}


// display materials with component to color map
Simulation.prototype.display = function() {

	// swap to display material and render
	this.mesh.material = this.painter
	this.renderer.render(this.scene, this.camera)
}


// extract number of components from glsl code
Simulation.prototype.getComponents = function(integrator) {

	// use regex to extract number of components from code
	var integratorRegex = integrator.match('component\\[([0-9])+\\]')

	// check if component keyword is present
	if (integratorRegex) {

		var integratorComponents = integratorRegex[0].match('([0-9])+')[0]
		return integratorComponents
	}
	else {
		throw 'no "component[n]" keyword found in one of fragment codes'
	}
}


// load solver files, returned as promise
loadSolver = function() {
	return Promise.all([

		new Promise( resolve => {
			jQuery.get('solver/coordinate.vert',
				function ( code ) { resolve(code) },'text')
		}),

		new Promise( resolve => {
			jQuery.get('solver/integrator.frag',
				function ( code ) { resolve(code) },'text')
		}),

		new Promise( resolve => {
			jQuery.get('solver/painter.frag',
				function ( code ) { resolve(code) },'text')
		})
	])
}
