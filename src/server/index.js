import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

let products = [
  { id: 1, title: "продукт1", message: "Описание" },
  { id: 2, title: "продукт 2", message: "Описание" }
];

app.get('/', (req, res) => {
  res.send('Сервер работает. /api/data');
});

app.get('/api/data', (req, res) => {
  res.json(products);
});

app.post('/api/data', (req, res) => {
  const newProduct = {
    id: products.length + 1,
    ...req.body
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});