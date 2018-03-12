/*
Module initialising server with site
2017. G. Szep
*/

/*eslint no-console: ["error", { allow: ["log"] }] */
/*global require process RESET:true CYAN:true*/
RESET = '\x1b[0m'
CYAN = '\x1b[36m'

function uuid() {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
		var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8)
		return v.toString(16)
	})
}

// serve app with views and static files
console.log(CYAN+'[Node]'+RESET+' Configuring Application')
const WebSocket = require('ws')
const App = require('./app'),
	app = new App()

// setup server with data i/o socket
const server = require('http').Server(app)
const socket = new WebSocket.Server({ server })

// listen for data input
const fs = require('fs')
socket.on('connection', socket => {

	socket.send('[Node] Data transfer socket connected')
	console.log('\n'+CYAN+'[Node]'+RESET+' Client connected',socket._socket.remoteAddress.replace(/^.*:/, ''))

	socket.on('message', buffer => {
		let id = uuid()

		fs.write('jupyter/notebooks/data/'+id,buffer, () => {
			console.log(CYAN+'[Node]'+RESET+' set data '+id)
		})
	})
})

server.listen(8000, () => {
	console.log(CYAN+'[Node]'+RESET+' Listening on %d', server.address().port)
})

// tell us when server shuts down
process.on('SIGINT', function(){
	console.log('\n'+CYAN+'[Node]'+RESET+' Shutting down server')
})
