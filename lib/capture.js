var net = require('net');
var fs = require('fs');

var server = net.createServer(function(socket) {
  var file = fs.createWriteStream('get.http');

  socket.pipe(process.stdout);
  socket.pipe(file);
});

server.listen(8080);
