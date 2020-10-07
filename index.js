var express = require('express');
var app = express();

var http = require('http').Server(app);
var io = require('socket.io')(http);


io.on('connection', function (socket) {
	socket.on('send', function(data) {
		io.emit("get", data);
	});
});


http.listen(3000, function() {
  console.log('listening on port 3000');
});