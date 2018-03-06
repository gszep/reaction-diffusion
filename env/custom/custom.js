/*
Custom functions and listeners defined within the jupyter notebook
2017. G. Szep
*/
/* global define Jupyter */

// prevent new tabs from opening from within iframe
define(['base/js/namespace'], function(Jupyter){
	Jupyter._target = '_self'
})

// allow communication from parent hosted at port 8000
window.addEventListener('message', function(event) {
	if (~event.origin.indexOf('http://localhost:8000')) {

		if(event.data.execute)
			Jupyter.notebook.kernel.execute(event.data.execute)

	}
	else
		return
})
