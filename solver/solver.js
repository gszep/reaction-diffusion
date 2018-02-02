/* global loadSolver:true jQuery */
/* exported loadSolver*/

// load solver files, returned as promise
loadSolver = function() {
	return Promise.all([

		new Promise( resolve => {
			jQuery.get('solver/coordinate.vert',
				function ( code ) { resolve(code) },'text')
		}),

		new Promise( resolve => {
			jQuery.get('solver/integrator.frag',
				function ( code ) { resolve(code) },'text')
		}),

		new Promise( resolve => {
			jQuery.get('solver/painter.frag',
				function ( code ) { resolve(code) },'text')
		})
	])
}
