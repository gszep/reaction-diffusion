/*
Custom functions and listeners defined within the jupyter notebook
2017. G. Szep
*/
/*eslint no-console: ["error", { allow: ["log"] }] */
/* global define Jupyter */

// prevent new tabs from opening from within iframe
define(['base/js/namespace'], function(Jupyter){
	Jupyter._target = '_self'
})

// allow communication from WebGL app to Jupyter Notebook 
window.addEventListener('message', function(event) {
	if (~event.origin.indexOf('http://localhost:8000')) {

		// execute code in new cell
		if(event.data.execute) {
			Jupyter.notebook.insert_cell_below()

			let cell = Jupyter.notebook.select_next().get_selected_cell()
			cell.set_text(event.data.execute)
			cell.execute()
		}

		// print to console
		if(event.data.log)
			console.log(event.data.log)
	}
	else
		return
})
