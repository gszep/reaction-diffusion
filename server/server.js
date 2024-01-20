/*
Module initialising server with site
2017. G. Szep
*/

/*eslint no-console: ["error", { allow: ["log"] }] */
/*global require process RESET:true CYAN:true*/
RESET = '\x1b[0m'
CYAN = '\x1b[36m'

// serve app with views and static files
console.log(CYAN+'[Node]'+RESET+' Configuring Application')

const App = require('./app'),
	app = new App()

// setup server with data i/o socket
const server = require('http').Server(app)
const Socket = require('./socket'),
	socket = new Socket(server)

server.listen(8000, () => {
	console.log(CYAN+'[Node]'+RESET+' Listening on %d', server.address().port); socket
})