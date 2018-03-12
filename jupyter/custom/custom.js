/*
Attach functions and listeners for messages from the
main index at the given origin, to the Jupyter Notebook
2017. G. Szep
*/
/*eslint no-console: ["error", { allow: ["log","error"] }] */
/* global define Jupyter */

var origin = 'http://reaction-diffusion.com'
var socket = new WebSocket('ws://reaction-diffusion.com')

// prevent new tabs from opening from within iframe
define(['base/js/namespace'], function(Jupyter){
	Jupyter._target = '_self'
})


// message handlers
window.addEventListener('message', function(event) {
	if (~event.origin.indexOf(origin)) {

		// Jupyter.prototype.execute
		if(event.data.execute) {
			Jupyter.notebook.insert_cell_below()

			let cell = Jupyter.notebook.select_next().get_selected_cell()
			cell.set_text(event.data.execute)
			cell.execute()
		}

		// Jupyter.prototype.setData
		else if( ArrayBuffer.prototype.isPrototypeOf(event.data) )
			socket.send(event.data)

		// Jupyter.prototype.postMessage
		else
			console.error('[jupyter] unrecognised message :'+event.data)
	}
	else
		return
})


// listen to server responses
socket.addEventListener('message', event => {
	Jupyter.notebook.insert_cell_below()

	let cell = Jupyter.notebook.select_next().get_selected_cell()
	cell.set_text(event.data)
	cell.execute()
})
