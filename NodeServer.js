// load http module
var http = require('http')

// configure http server
http.createServer(function(request, response) {
  response.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  response.end('Hello, Work!\n');
}).listen(1137, "127.0.0.1");

// inform user what is happening
console.log('Server running at http://127.0.0.1:1137');
