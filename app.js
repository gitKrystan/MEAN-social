// uses node's built-in http module to act as a server
var http = require('http');
http.createServer(function(request, response) {
  // this callback is executed whenever the server receives a new request
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write('Hello World');
  response.end();
}).listen(3000);
