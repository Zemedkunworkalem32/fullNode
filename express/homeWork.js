import express from 'express';
const app = express();
app.get('/home', (req, res) => {
  res.send('Yeah it is me');
});
app.listen(5000, () => {
  console.log('i am listening talk to me');
});