/*
Jupyter object that sends cross-origin data/commands
to the Jupyter Notebook hosted under given url
Author: Gregory Szep, King's College London 2018
*/
var jupyterURL = 'http://35.176.80.10:8888'
var socket = new WebSocket('ws://35.176.80.10:9999')

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
	var that = this

	if( Float32Array.prototype.isPrototypeOf(object) )
		socket.send(object)

	else if ( Array.prototype.isPrototypeOf(object) )
		object.forEach( element => { that.setData(element) })

	else // format not recognised
		this.postMessage(object)
}


// default handler
Jupyter.prototype.postMessage = function(message) {
	this.notebook.postMessage(message,jupyterURL)
}
