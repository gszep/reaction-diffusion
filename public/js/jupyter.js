/*
Jupyter object that sends cross-origin data/commands
to the Jupyter Notebook hosted under given url
Author: Gregory Szep, King's College London 2018
*/
var jupyterURL = 'http://localhost:8888'

// linker object to notebook iframe
function Jupyter(notebook) {
	this.notebook = document.getElementById(notebook).contentWindow
}


// send code for execution
Jupyter.prototype.execute = function(code) {
	this.notebook.postMessage({execute:code},jupyterURL)
}


// send arrays to jupyter
Jupyter.prototype.setData = function(object) {
	var that = this

	if( Float32Array.prototype.isPrototypeOf(object) )
		this.notebook.postMessage(object.buffer,jupyterURL,[object.buffer])

	else if ( Array.prototype.isPrototypeOf(object) )
		object.forEach( element => { that.setData(element) })

	else // format not recognised
		this.postMessage(object)
}


// default handler
Jupyter.prototype.postMessage = function(message) {
	this.notebook.postMessage(message,jupyterURL)
}
