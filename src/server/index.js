import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Встроенный парсер JSON

// Initial data
let products = [
  { id: 1, title: "Продукт 1", description: "Описание 1", price: 100 },
  { id: 2, title: "Продукт 2", description: "Описание 2", price: 200 }
];

// Routes
app.get('/', (req, res) => {
  res.send('Сервер работает. Перейдите на /api/data для получения данных.');
});

app.get('/api/data', (req, res) => {
  res.json(products);
});

app.post('/api/data', (req, res) => {
  const newProduct = {
    id: products.length + 1,
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    createdAt: new Date().toISOString()
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Что-то сломалось!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
