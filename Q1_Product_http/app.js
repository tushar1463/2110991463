const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

let products = [
  { id: '1', name: 'Product 1', price: 10 },
  { id: '2', name: 'Product 2', price: 20 },
  { id: '3', name: 'Product 3', price: 30 }
];

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:productId', (req, res) => {
  const product = products.find(p => p.id === req.params.productId);
  if (product) {
    res.json(product);
  } else {
    res.status(404).send('Product not found');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
