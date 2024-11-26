module.exports = (req, res, next) => {
    const { originalUrl } = req.body;
  
    // Check if the URL is valid
    const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
  
    if (!originalUrl || !urlRegex.test(originalUrl)) {
      return res.status(400).json({ error: 'Invalid URL format' });
    }
  
    next(); // Proceed to the next middleware or route handler
  };
  