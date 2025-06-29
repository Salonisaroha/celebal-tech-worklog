const express = require('express');
const logger = require('./middleware/logger');
const productRoutes = require('./routes/productRoutes');

const app = express();

// Middleware
app.use(express.json());
app.use(logger);

// Routes
app.use('/api/products', productRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('Product Management API is running.');
});

module.exports = app;
