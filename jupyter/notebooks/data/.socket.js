/*eslint no-console: ["error", { allow: ["log","error"] }] */

var socket = new WebSocket('ws://reaction-diffusion.com')
self.onmessage = function (event) {
	socket.send(event.data)
}

// listen to server responses
socket.addEventListener('message', event => {
	console.log(event.data)
})
