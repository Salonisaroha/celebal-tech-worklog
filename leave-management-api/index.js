require('dotenv').config();
const express = require('express');
const app = express();
const path = require("path");

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

const leaveRoutes = require('./routes/leaveRoutes');
const requestLogger = require('./middleware/requestLogger');

const PORT = process.env.PORT || 4000;

// Middleware
app.use(express.json());
app.use(requestLogger);

// Routes
app.use('/api/leaves', leaveRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to Celebal\'s Leave Management API');
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
