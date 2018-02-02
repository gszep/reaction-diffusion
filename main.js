/*
Reaction-Diffusion System Solver
Author: Gregory Szep, King's College London 2017
Adapted from code by Pablo Márquez Neila
*/

/* global gl:true */

var FBO, FBO2, texture, texture2, it = 1,
	a = .8, b = .01, dt = .05, eps = .02, h = .607


function Simulation(canvas,coordinate,integrator,painter) {

	gl = document.getElementById(canvas).getContext('webgl2')
	if (!window.WebGLRenderingContext || !gl ){
		alert('Your browser does not support WebGL 2.0.'); return}

	this.integrator  = gl.createProgram()
	gl.attachShader(this.integrator, this.getShader(coordinate,'vert'))
	gl.attachShader(this.integrator, this.getShader(integrator,'frag'))
	gl.linkProgram(this.integrator)
	this.painter  = gl.createProgram()
	gl.attachShader(this.painter, this.getShader(coordinate,'vert'))
	gl.attachShader(this.painter, this.getShader(painter,'frag'))
	gl.linkProgram(this.painter)

	var posBuffer = gl.createBuffer()
	gl.bindBuffer(gl.ARRAY_BUFFER, posBuffer)
	var vertices = new Float32Array([-1,-1,0, 1,-1,0, -1,1,0, 1,1,0])
	var aPosLoc = gl.getAttribLocation(this.integrator, 'position')
	gl.enableVertexAttribArray( aPosLoc )
	var aTexLoc = gl.getAttribLocation(this.integrator, 'aTexCoord')
	gl.enableVertexAttribArray( aTexLoc )
	var texCoords = new Float32Array([0,0, 1,0, 0,1, 1,1])
	var texCoordOffset = vertices.byteLength
	gl.bufferData(gl.ARRAY_BUFFER,
		texCoordOffset + texCoords.byteLength, gl.STATIC_DRAW)
	gl.bufferSubData(gl.ARRAY_BUFFER, 0, vertices)
	gl.bufferSubData(gl.ARRAY_BUFFER, texCoordOffset, texCoords)
	gl.vertexAttribPointer(aPosLoc, 3, gl.FLOAT, gl.FALSE, 0, 0)
	gl.vertexAttribPointer(aTexLoc, 2, gl.FLOAT, gl.FALSE, 0, texCoordOffset)

	texture = gl.createTexture()
	gl.bindTexture(gl.TEXTURE_2D, texture)
	gl.pixelStorei(gl.UNPACK_ALIGNMENT, 1)
	var pixels = [], tSize = 512
	for(var i = 0; i<tSize; i++)
		for(var j = 0; j<tSize; j++){
			if (Math.random() < .001) pixels.push( 250 )
			else pixels.push( 0 )
			if (Math.random() < .5) pixels.push( 250 )
			else pixels.push( 0 )
			pixels.push( 0 )
			pixels.push( 0 )
		}

	gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, tSize, tSize, 0,
		gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array(pixels))
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST)
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST)
	texture2 = gl.createTexture()
	gl.bindTexture(gl.TEXTURE_2D, texture2)
	gl.pixelStorei(gl.UNPACK_ALIGNMENT, 1)
	gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, tSize, tSize, 0,
		gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array(pixels))
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST)
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST)
	FBO = gl.createFramebuffer()
	gl.bindFramebuffer(gl.FRAMEBUFFER, FBO)
	gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0,
		gl.TEXTURE_2D, texture, 0)
	FBO2 = gl.createFramebuffer()
	gl.bindFramebuffer(gl.FRAMEBUFFER, FBO2)
	gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0,
		gl.TEXTURE_2D, texture2, 0)

	gl.useProgram(this.integrator)
	gl.uniform1f(gl.getUniformLocation(this.integrator, 'a'), a)
	gl.uniform1f(gl.getUniformLocation(this.integrator, 'ba'),  b/a)
	gl.uniform1f(gl.getUniformLocation(this.integrator, 'dt'), dt)
	gl.uniform1f(gl.getUniformLocation(this.integrator, 'dte'), dt/eps)
	gl.uniform1f(gl.getUniformLocation(this.integrator, 'dth2'), dt/(h*h))
	gl.uniform1i(gl.getUniformLocation(this.integrator, 'uTexSamp'), 0)
	gl.useProgram(this.painter)
	gl.uniform1i(gl.getUniformLocation(this.painter, 'uTexSamp'), 0)


	this.renderLoop()
}


Simulation.prototype.render = function() {
	gl.useProgram(this.integrator)
	if (it > 0){
		gl.bindTexture(gl.TEXTURE_2D, texture)
		gl.bindFramebuffer(gl.FRAMEBUFFER, FBO2)}
	else{
		gl.bindTexture(gl.TEXTURE_2D, texture2)
		gl.bindFramebuffer(gl.FRAMEBUFFER, FBO)}
	gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
	gl.flush()

	it = -it

	this.display()
}


// main animation loop
Simulation.prototype.renderLoop = function() {
	this.render()
	requestAnimationFrame(this.renderLoop.bind(this))
}


// display materials with component to color map
Simulation.prototype.display = function() {

	gl.useProgram(this.painter)
	gl.bindFramebuffer(gl.FRAMEBUFFER,null)
	gl.drawArrays(gl.TRIANGLE_STRIP,0,4)
}


// shader compiler method
Simulation.prototype.getShader = function(sourceCode,type) {
	var shader

	if (type=='vert')
		shader = gl.createShader(gl.VERTEX_SHADER)
	if (type=='frag')
		shader = gl.createShader(gl.FRAGMENT_SHADER)

	// compile shader
	gl.shaderSource(shader,sourceCode)
	gl.compileShader(shader)

	// report any errors
	if(!gl.getShaderParameter(shader,gl.COMPILE_STATUS)) {
		console.error(gl.getShaderInfoLog(shader))
	}

	return shader
}
