/*
Module initialising server with site
2017. G. Szep
*/

/*eslint no-console: ["error", { allow: ["log"] }] */
/*global require */

// serve app with views and static files
console.log('[Node] Configuring Application')
const App = require('./app'),
	app = new App()

// setup realtime i/o on socket
const server = require('http').Server(app)
var port = 8000

server.listen(port)
console.log('[Node] Listening on port '+port)
