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

// setup realtime i/o on socket
const server = require('http').Server(app)
var port = 8000

server.listen(port)
console.log(CYAN+'[Node]'+RESET+' Listening on port '+port)

process.on('SIGINT', function(){
	console.log('\n'+CYAN+'[Node]'+RESET+' Shutting down server')
})
