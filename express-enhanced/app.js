const express = require('express');
const app = express();
const uploadRoutes = require('./routes/uploadRoutes');
const apiRoutes = require('./routes/apiRoutes');
const errorHandler = require('./middlewares/errorHandler');

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use('/api/upload', uploadRoutes);
app.use('/api/external', apiRoutes);

// Error handling middleware
app.use(errorHandler);

// Server listening
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
