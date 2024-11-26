require('dotenv').config(); // Load environment variables
const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/route'); // Import the router
const errorHandler = require('./middleware/errorHandler');
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./swagger'); // Import the Swagger config




const app = express();

// Middleware for parsing JSON
app.use(express.json());
app.use(errorHandler);

// Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));


// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// Use the router for all endpoints
app.use('/', router);

// Default route for health check
app.get('/', (req, res) => {
  res.send('URL Shortener API is running');
});


// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
