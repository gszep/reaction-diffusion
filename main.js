/*
Reaction-Diffusion System Solver
Author: Gregory Szep, King's College London 2017
Adapted from code by Pablo Márquez Neila
*/

/* global THREE loadSolver:true $ jQuery */
/* exported loadSolver */

// Configuration.
var diffusionRatio = 0.5
var timeStep = 0.1

// main simulation canvas
function Simulation(canvas,nStates,coordinate,integrator,painter) {

	this.canvas = $(canvas).get(0)
	this.width = $(canvas).width()
	this.height = $(canvas).height()

	this.nStates = nStates
	this.spaceStep = 1.0

	// initialise interactions
	this.sliders()
	this.mouseEvents()

	// initialise view and materials
	this.materials(coordinate,integrator,painter)
	this.view()

	// begin simulation
	this.clock = new THREE.Clock()
	this.renderLoop()
}

// main animation loop
Simulation.prototype.renderLoop = function() {
	this.render(this.clock)
	requestAnimationFrame(this.renderLoop.bind(this))
}

// single animation iteration
Simulation.prototype.render = function(clock) {
	this.uniforms.time.value = 60.0 * clock.getElapsedTime()

	// update parameters
	this.uniforms.diffusionRatio.value = diffusionRatio
	this.uniforms.timeStep.value = timeStep

	// set display mesh to use compute material
	this.mesh.material = this.computeMaterial

	for (var i = 0; i < 8; ++i ) {

		// set current buffer index
		var index = this.index === 0?1:0

		// TODO(@gszep) factor paramter properties/updater
		this.updateUniforms(this.buffer[this.index])
		this.renderer.render(this.scene, this.camera, this.buffer[index], true)

		this.updateUniforms(this.buffer[index])
		this.renderer.render(this.scene, this.camera, this.buffer[this.index], true)

		// TODO(@gszep) factor brush properties/updater
		this.uniforms.brush.value = new THREE.Vector4(-1,-1,0,0)

		// toggle buffer
		this.index = index
	}

	// render display material
	this.mesh.material = this.displayMaterial
	this.renderer.render(this.scene, this.camera)
}

// transfer components from buffer to uniforms for next update
Simulation.prototype.updateUniforms = function(buffer) {
	for ( let i = 0; i < this.nStates; i++ ) {
		this.uniforms.component.value[i] = buffer.attachments[i]
	}
}

// initialise uniforms, shaders and materials
Simulation.prototype.materials = function(coordinate,integrator,painter) {

	// initialise materials
	this.uniforms = {

		time: {type: 'f', value: 0.0 },
		timeStep: {type: 'f', value: timeStep },
		spaceStep: {type: 'v2', value:

			new THREE.Vector2(
				this.spaceStep/this.width,
				this.spaceStep/this.height)
		},

		component: {type: 'tv', value: [] },

		// TODO(@gszep) factor paramter properties
		diffusionRatio: {type: 'f', value: diffusionRatio },
		brush: {type: 'v4', value: new THREE.Vector4(-1,-1,0,0)},
		color: {type: 'v4v', value: [] }
	}

	// compile integrator to shader in gpu
	this.computeMaterial = new THREE.ShaderMaterial({
		uniforms: this.uniforms,
		vertexShader: coordinate,
		fragmentShader: integrator,

		// required for multiple target rendering
		extensions: { drawBuffers: true}
	})

	this.computeMaterial.blending = THREE.NoBlending
	this.displayMaterial = new THREE.ShaderMaterial({
		uniforms: this.uniforms,
		vertexShader: coordinate,
		fragmentShader: painter,
	})
}

// view and rendering engine
Simulation.prototype.view = function() {

	// load rendering engine
	this.renderer = new THREE.WebGLRenderer({
		canvas: this.canvas, preserveDrawingBuffer: true })
	this.renderer.setSize(this.width, this.height)

	// initialise render buffers
	this.buffer = []
	this.index = 0

	for ( let i = 0; i < 2; i++ ) {

		let target = new THREE.WebGLMultiRenderTarget(
			this.width/this.spaceStep, this.height/this.spaceStep, {
				format: THREE.RGBAFormat, type: THREE.FloatType })

		// one render target for each component in system
		for ( let i = 0; i < this.nStates-1; i++ ) {
			target.attachments.push(target.texture.clone())
		}

		this.buffer.push(target)
	}

	// initialise view which is rendered
	this.scene = new THREE.Scene()
	this.camera = new THREE.OrthographicCamera(-0.5,0.5,0.5,-0.5,-10,100)

	// create plane mesh geomerty, add it to scene
	let geometry = new THREE.PlaneBufferGeometry(1.0, 1.0)
	this.mesh = new THREE.Mesh(geometry)
	this.scene.add(this.mesh)
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
		value: timeStep, min: 0, max:0.21, step:0.001,

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

// mouse events and colour gradients
Simulation.prototype.mouseEvents = function() {
	var that = this

	// TODO(@gszep) factor brush properties into this json
	this.brush = { radius: 0.1 }


	this.canvas.onmouseup = function() {
		that.isMouseDown = false
	}

	this.canvas.onmousedown = function(event) {
		that.isMouseDown = true
		var component

		if (event.which == 1)
			component = 0

		if (event.which == 3)
			component = 1

		if (event.which == 2)
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

		if (event.which == 3)
			component = 1

		if (event.which == 2)
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
		var radius = that.brush.radius + delta/1000

		that.brush.radius = radius > 0 ? radius : 0.01
	}

	// TODO(@gszep) use number keys for selecting components
	window.onkeydown = function() {
		return false
	}

	// bind gradient widget to colours in painter
	$('#gradient').gradient('setUpdateCallback',function() {
		var values = $('#gradient').gradient('getValuesRGBS')

		for( let i=0; i<values.length; i++) {
			var v = values[i]
			that.uniforms.color.value[i] = new THREE.Vector4(v[0], v[1], v[2], v[3])
		}
	})

	// prevent context menue from opening on right-click
	this.canvas.oncontextmenu = function (event) {
		event.preventDefault()
	}
}

// load solver files, returned as promise
loadSolver = function() {
	return Promise.all([

		new Promise( resolve => {
			jQuery.get('solver/coordinate.vert',
				function ( code ) { resolve(code) })
		}),

		new Promise( resolve => {
			jQuery.get('solver/integrate.frag',
				function ( code ) { resolve(code) })
		}),

		new Promise( resolve => {
			jQuery.get('solver/paint.frag',
				function ( code ) { resolve(code) })
		})
	])
}
