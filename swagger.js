const swaggerJsDoc = require('swagger-jsdoc');

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'URL Shortener API',
      version: '1.0.0',
      description: 'API for shortening URLs, redirecting, and retrieving usage statistics',
    },
    servers: [
      {
        url: process.env.BASE_URL || 'http://localhost:5000', // Base URL for the API
      },
    ],
  },
  apis: ['./routes/*.js'], // Point to your route files for documentation
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = swaggerDocs;
