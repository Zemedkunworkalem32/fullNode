const http = require('http');

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === '/home') {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1>Welcome to our Node.js Server!</h1>');
  res.write('<p>This is a simple HTTP server built with Node.js.</p>');
  res.write('<p>Feel free to explore and modify the code!</p>');
  res.end();
  } else if (url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>About Us</h1>');
    res.write('<p>We are a team of passionate developers building web applications.</p>');
    res.end();
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.write('<h1>404 Not Found</h1>');
    res.write('<p>The page you are looking for does not exist.</p>');
    res.end();
  }
});

server.listen(5000, () => {
  console.log('Server is listening on port 5000');
});