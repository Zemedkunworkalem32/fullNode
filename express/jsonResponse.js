import express from 'express';

const app = express();

app.use(express.json());

app.get('/api/users/:id', (req, res) => {
  const userId = req.params.id;

  const user = {
    id: userId,
    name: 'John Doe',
    email: `john.doe${userId}@example.com`,
    role: 'administrator'
  };

  res.json(user);
});

app.get('/api/products', (req, res) => {
  const products = [
    { id: 1, name: 'Product 1', price: 10.99 },
    { id: 2, name: 'Product 2', price: 19.99 },
    { id: 3, name: 'Product 3', price: 5.99 }
  ];

  res.json(products);
});

app.get('/student/:studentId', (req, res) => {
  console.log({
    method: req.method,
    url: req.url,
    query: req.query,
    params: req.params,
    body: req.body
  });

  res
    .status(200)
    .type("text/plain")
    .send(`Hello, ${req.query.name}! Your Id is ${req.params.studentId}`);
});

app.listen(5000, () => {
  console.log('server is listening on port 5000');
});
