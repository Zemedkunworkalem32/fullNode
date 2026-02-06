const express = require('express');
const app = express();

app.get('/home', (req, res) => {
  res.status(200).send('<h1>Welcome to our Express Server!</h1><p>This is a simple Express server built with Node.js.</p><p>Feel free to explore and modify the code!</p>');
});

app.get('/about', (req, res) => {
  res.status(200).send('<h1>About Us</h1><p>We are a team of passionate developers building web applications.</p>');
}); 
app.use((req, res) => {
  res.status(404).send('<h1>404 Not Found</h1><p>The page you are looking for does not exist.</p>');
});

app.listen(5000, () => {
  console.log('Express server is listening on port 5000');
});