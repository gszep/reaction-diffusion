/* global load:true jQuery */
/* exported load*/

// load files, returned as promise
load = function(filepaths) {

	let promises = []
	filepaths.forEach( filepath => {

		let promise = new Promise( resolve => {
			jQuery.get(filepath,
				function ( code ) { resolve(code) },'text')
		})
		promises.push(promise)
	})

	return Promise.all(promises)
}
