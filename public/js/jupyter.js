/*
Jupyter object that facilitates cross-origin communication
Author: Gregory Szep, King's College London 2018
*/


// linker object to notebook iframe
function Jupyter(notebook) {
	this.notebook = document.getElementById(notebook).contentWindow
}


// send code for execution
Jupyter.prototype.execute = function(code) {
	this.notebook.postMessage({execute:code},'*')
}
