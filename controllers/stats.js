const Url = require('../models/Url');

exports.getStats = async (req, res) => {
  const { shortId } = req.params;

  try {
    const url = await Url.findOne({ shortId });

    if (!url) return res.status(404).json({ error: 'URL not found' });

    res.json({
      originalUrl: url.originalUrl,
      clicks: url.clicks,
      lastAccessed: url.lastAccessed,
    });
  } catch (error) {
    res.status(500).json({ error: 'Error fetching stats' });
  }
};
