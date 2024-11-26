const express = require('express');
const shortenController = require('../controllers/shorten');
const redirectController = require('../controllers/redirect');
const statsController = require('../controllers/stats');
const validateUrl = require('../middleware/validateUrl'); // Middleware for URL validation
const rateLimiter = require('../middleware/rateLimiter'); // Middleware for rate limiting

const router = express.Router();

// URL Shortening
// Applying middleware for input validation and rate limiting
router.post('/shorten', validateUrl, rateLimiter, shortenController.shortenUrl);

// URL Redirection
// Optional: Adding rate limiting middleware
router.get('/:shortId', rateLimiter, redirectController.redirectUrl);

// Usage Stats
// Optional: Adding rate limiting middleware
router.get('/stats/:shortId', rateLimiter, statsController.getStats);

module.exports = router;
