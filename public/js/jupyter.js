/*
Jupyter object that sends cross-origin data/commands
to the Jupyter Notebook hosted under given url
Author: Gregory Szep, King's College London 2018
*/
/*eslint no-console: ["error", { allow: ["log"] }] */
var jupyterURL = 'http://reaction-diffusion.com:8888'
var socket = new WebSocket('ws://reaction-diffusion.com')

// linker object to notebook iframe
function Jupyter(notebook) {
	this.notebook = document.getElementById(notebook).contentWindow
}


// send code for execution
Jupyter.prototype.execute = function(code) {
	this.notebook.postMessage({execute:code},jupyterURL)
}


// send arrays to jupyter via socket
Jupyter.prototype.setData = function(object) {

	if( Float32Array.prototype.isPrototypeOf(object) )
		socket.send(object)

	else if ( Array.prototype.isPrototypeOf(object) )
		object.forEach( element => { socket.send(element) })

	else // format not recognised
		this.postMessage(object)
}


// default handler
Jupyter.prototype.postMessage = function(message) {
	this.notebook.postMessage(message,jupyterURL)
}


// listen to responses
socket.addEventListener('message', event => {
	console.log(event.data)
})
