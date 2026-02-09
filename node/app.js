const http = require('http');

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === '/') {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('welcome to home page');
  } else if (url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('welcome to about page');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('page not found');
  } 
});

server.listen(5000, () => {
  console.log('Server is listening on port 5000');
});