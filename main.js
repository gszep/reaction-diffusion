/*
Reaction-Diffusion System Solver
Author: Gregory Szep, King's College London 2017
Adapted from code by Pablo Márquez Neila
*/

/* global THREE loadSolver:true $ jQuery */
/* exported loadSolver */

// Configuration.
var diffusionRatio = 0.5

function Simulation(canvas,nStates,coordinate,integrator,painter) {

	this.canvas = $(canvas).get(0)
	this.width = $(canvas).width()
	this.height = $(canvas).height()

	this.nStates = nStates
	this.spaceStep = 1.5
	this.timeStep = 0.01

	// initialise interactions
	this.sliders()
	this.mouseEvents()

	// initialise view and materials
	this.materials(coordinate,integrator,painter)
	this.view()

	// initial condition
	this.clock = new THREE.Clock()

	// begin simulation
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

	// set display mesh to use compute material
	this.mesh.material = this.computeMaterial

	for (var i = 0; i < 8; ++i ) {

		// set current buffer index
		var index = this.index === 0?1:0

		// time-step
		this.updateUniforms(this.buffer[this.index])
		this.renderer.render(this.scene, this.camera, this.buffer[index], true)

		this.updateUniforms(this.buffer[index])
		this.renderer.render(this.scene, this.camera, this.buffer[this.index], true)

		this.uniforms.brush.value = new THREE.Vector2(-1, -1)

		// toggle buffer
		this.index = index
	}

	// render display material
	this.mesh.material = this.displayMaterial
	this.renderer.render(this.scene, this.camera)
}

Simulation.prototype.updateUniforms = function(buffer) {

	for ( let i = 0; i < this.nStates; i++ ) {
		this.uniforms.component.value[i] = buffer.attachments[i]

	}
}

Simulation.prototype.materials = function(coordinate,integrator,painter) {

	// initialise materials
	this.uniforms = {

		time: {type: 'f', value: 0.0 },
		timeStep: {type: 'f', value: this.timeStep },
		spaceStep: {type: 'v2', value:

			new THREE.Vector2(
				this.spaceStep/this.width,
				this.spaceStep/this.height)
		},

		component: {type: 'tv', value: [] },

		diffusionRatio: {type: 'f', value: diffusionRatio },
		brush: {type: 'v2', value: new THREE.Vector2(-10, -10)},
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

// model parameter sliders
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
}

// mouse events and colour gradients
Simulation.prototype.mouseEvents = function() {
	var that = this

	this.canvas.onmouseup = function() {
		that.isMouseDown = false
	}

	this.canvas.onmousedown = function() {
		that.isMouseDown = true

		that.uniforms.brush.value = new THREE.Vector2(
			this.mouseX/$('#'+that.canvas.id).width(),
			1-this.mouseY/$('#'+that.canvas.id).height()
		)
	}

	this.canvas.onmousemove = function(event) {
		var mouseEvent = event ? event : window.event

		this.mouseX = mouseEvent.pageX - $('#'+that.canvas.id).offset().left
		this.mouseY = mouseEvent.pageY - $('#'+that.canvas.id).offset().top

		if(that.isMouseDown){
			that.uniforms.brush.value = new THREE.Vector2(
				this.mouseX/$('#'+that.canvas.id).width(),
				1-this.mouseY/$('#'+that.canvas.id).height()
			)
		}
	}

	$('#gradient').gradient('setUpdateCallback',function() {
		var values = $('#gradient').gradient('getValuesRGBS')

		for( let i=0; i<values.length; i++) {
			var v = values[i]
			that.uniforms.color.value[i] = new THREE.Vector4(v[0], v[1], v[2], v[3])
		}
	})
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
