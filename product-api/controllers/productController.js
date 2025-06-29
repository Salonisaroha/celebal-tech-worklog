const { v4: uuidv4 } = require('uuid');
let products = require('../models/productModel');

// Get all products
exports.getAllProducts = (req, res) => {
  res.status(200).json(products);
};

// Get a single product
exports.getProductById = (req, res) => {
  const id = req.params.id;
  const product = products.find(p => p.id === id);

  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }

  res.status(200).json(product);
};

// Create a new product
exports.createProduct = (req, res) => {
  const { name, price, description } = req.body;

  if (!name || !price || !description) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  const newProduct = {
    id: uuidv4(),
    name,
    price,
    description
  };

  products.push(newProduct);

  res.status(201).json(newProduct);
};

// Update product
exports.updateProduct = (req, res) => {
  const id = req.params.id;
  const { name, price, description } = req.body;

  const product = products.find(p => p.id === id);

  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }

  product.name = name || product.name;
  product.price = price || product.price;
  product.description = description || product.description;

  res.status(200).json(product);
};

// Delete product
exports.deleteProduct = (req, res) => {
  const id = req.params.id;

  const index = products.findIndex(p => p.id === id);

  if (index === -1) {
    return res.status(404).json({ message: 'Product not found' });
  }

  products.splice(index, 1);

  res.status(200).json({ message: 'Product deleted successfully.' });
};
