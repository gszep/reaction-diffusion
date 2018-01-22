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
function Simulation(canvas,coordinate,integrator,painter) {

	this.canvas = $(canvas).get(0)
	this.width = $(canvas).width()
	this.height = $(canvas).height()

	this.spaceStep = 1.0
	this.renderStep = 20

	// initialise view and materials from glsl code
	this.nComponents = this.getComponents(integrator,painter)
	this.materials(coordinate,integrator,painter)
	this.view()

	// initialise interactions
	this.sliders()
	this.mouseEvents()

	// begin simulation
	this.renderLoop()
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

	// set display mesh to use integrator
	this.mesh.material = this.computeMaterial

	for ( var i = 0; i < this.renderStep; ++i ) {

		// set current buffer index
		var index = this.index === 0?1:0

		// TODO(@gszep) factor paramter properties/updater
		this.updateComponents(this.buffer[this.index])
		this.renderer.render(this.scene, this.camera, this.buffer[index], true)

		this.updateComponents(this.buffer[index])
		this.renderer.render(this.scene, this.camera, this.buffer[this.index], true)

		// toggle buffer
		this.index = index
	}

	// render display material
	this.mesh.material = this.displayMaterial
	this.renderer.render(this.scene, this.camera)
}

// transfer components from buffer to uniforms for next update
Simulation.prototype.updateComponents = function(buffer) {

	// iterate through buffers and copy to uniforms
	for ( let i = 0; i < this.nComponents; i++ ) {
		this.uniforms.component.value[i] = buffer.attachments[i]
	}

	// remove brush after each timestep
	this.uniforms.brush.value = new THREE.Vector4(-1,-1,0,0)
}

// initialise uniforms, shaders and materials
Simulation.prototype.materials = function(coordinate,integrator,painter) {

	// unifroms holds the set of variables and parameters
	this.uniforms = {

		// spacetime parameters
		timeStep: {type: 'f', value: timeStep },
		spaceStep: {type: 'v2', value:

			new THREE.Vector2(
				this.spaceStep/this.width,
				this.spaceStep/this.height)
		},

		// components and colour variables
		component: {type: 'tv', value: [] },
		color: {type: 'v4v', value: [] },

		// TODO(@gszep) factor paramter properties
		diffusionRatio: {type: 'f', value: diffusionRatio },
		brush: {type: 'v4', value: new THREE.Vector4(-1,-1,0,0)}
	}

	// compute material plays the role of integrator on gpu
	this.computeMaterial = new THREE.ShaderMaterial({

		// pass in variables and parameters
		uniforms: this.uniforms,

		// pass integration code
		vertexShader: coordinate,
		fragmentShader: integrator,

		// required for multiple target rendering
		extensions: { drawBuffers: true}
	})

	// display material renders the components in rgb format
	this.displayMaterial = new THREE.ShaderMaterial({

		// pass components and colors for mapping
		uniforms: {
			component: {type: 'tv', value: this.uniforms.component.value },
			color: {type: 'v4v', value: this.uniforms.color.value }
		},

		// pass components to color mapping code
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
	this.buffer()

	// initialise camera angle to be rendered
	this.scene = new THREE.Scene()
	this.camera = new THREE.OrthographicCamera(-0.5,0.5,0.5,-0.5,-10,100)

	// create plane mesh geomerty, add it to scene
	let geometry = new THREE.PlaneBufferGeometry(1.0, 1.0)
	this.mesh = new THREE.Mesh(geometry)
	this.scene.add(this.mesh)
}


// initialise frame buffers
Simulation.prototype.buffer = function() {

	this.buffer = []
	this.index = 0

	// alternate two targets for frame buffer
	for ( let i = 0; i < 2; i++ ) {

		let target = new THREE.WebGLMultiRenderTarget(
			this.width/this.spaceStep, this.height/this.spaceStep, {
				format: THREE.RGBAFormat, type: THREE.FloatType })

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


// mouse events and colour gradients
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
		var radius = that.brush.radius + delta/10000

		that.brush.radius = radius > 0 ? radius : 0.01
	}

	// TODO(@gszep) use number keys for selecting components
	window.onkeydown = function() { return false }

	// bind gradient widget to colours in painter material
	$('#gradient').gradient('setUpdateCallback',function () { that.updateColors() })
	this.updateColors()

	// prevent context menue from opening on right-click
	this.canvas.oncontextmenu = function (event) { event.preventDefault() }
}


// TODO update perturbation brush
Simulation.prototype.updateBrush = function() {

}


// update color gradient used to paint results
Simulation.prototype.updateColors = function() {
	var colors = $('#gradient').gradient('getValuesRGBS')

	for( let i=0; i<colors.length; i++) {
		var [r,g,b,a] = colors[i]
		this.uniforms.color.value[i] = new THREE.Vector4(r,g,b,a)
	}
}


// extract number of components from glsl code
Simulation.prototype.getComponents = function(integrator,painter) {

	// use regex to extract number of components from code
	var integratorRegex = integrator.match('component\\[([0-9])+\\]')
	var painterRegex = painter.match('component\\[([0-9])+\\]')

	// check if component keyword is present
	if (integratorRegex && painterRegex ) {

		var integratorComponents = integratorRegex[0].match('([0-9])+')[0]
		var painterComponents = painterRegex[0].match('([0-9])+')[0]

		// check if painter and integrator match
		if (integratorComponents != painterComponents)
			throw 'components found in integrate.frag and paint.frag not equal \n'
			+integratorComponents+' != '+painterComponents
		else
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
			jQuery.get('solver/integrate.frag',
				function ( code ) { resolve(code) },'text')
		}),

		new Promise( resolve => {
			jQuery.get('solver/paint.frag',
				function ( code ) { resolve(code) },'text')
		})
	])
}
