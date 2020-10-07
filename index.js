var express = require('express');
var app = express();

var http = require('http').Server(app);
var io = require('socket.io')(http);


io.on('connection', function (socket) {
	socket.on('send', function(data) {
		io.emit("get", data);
	});
});
app.use(express.static("public"))

// define the first route
app.get("/", function (req, res) {
  res.send("<h1>Hello World!</h1>")
})

// start the server listening for requests
app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));

http.listen(3000, function() {
  console.log('listening on port 3000');
});
