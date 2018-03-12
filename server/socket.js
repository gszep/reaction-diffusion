/*
Data transfer socket
2018. G. Szep
*/
/*eslint no-console: ["error", { allow: ["log"] }] */
/*global RESET:true CYAN:true*/
RESET = '\x1b[0m'
CYAN = '\x1b[36m'

const WebSocket = require('ws')
const fs = require('fs')


module.exports = function(server) {
	let socket = new WebSocket.Server({ server })

	// listen for data input
	socket.on('connection', socket => {

		socket.send('[Node] Data transfer socket connected')
		console.log('\n'+CYAN+'[Node]'+RESET+' Client connected',socket._socket.remoteAddress.replace(/^.*:/, ''))

		socket.on('message', buffer => {
			let fileName = '../jupyter/notebooks/data/'+uuid()

			fs.open(fileName, 'w', (error,filePointer) => {
				if (error) console.log(CYAN+'[Node]'+RESET+' error opening file '+fileName)

				fs.write(filePointer,buffer,error => {
					if (error) console.log(CYAN+'[Node]'+RESET+' error writing data '+fileName)
					else socket.send({setData: fileName})
				})
			})
		})
	})

	return socket
}


// unique id for data writing
function uuid() {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
		var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8)
		return v.toString(16)
	})
}
