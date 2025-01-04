const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello, World!');
};

const server = http.createServer(requestListener);

server.listen(8080);
console.log('Server is running on port 8080');
//The issue is that the server doesn't handle errors properly.  If there's a problem (like the port is already in use), it will crash without logging any useful information.