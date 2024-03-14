// Importing required modules
const http = require('http');

// Creating a server
const server = http.createServer((req, res) => {
  // Setting response header
  res.writeHead(200, {'Content-Type': 'text/html'});
  
  // Sending response
  res.write('<h1>Hello, World!</h1>');
  res.end();
});

// Setting server to listen on port 3000
server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

