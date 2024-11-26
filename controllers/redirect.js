const Url = require('../models/Url');

exports.redirectUrl = async (req, res) => {
  const { shortId } = req.params;

  try {
    const url = await Url.findOne({ shortId });

    if (!url) return res.status(404).json({ error: 'URL not found' });

    url.clicks++;
    url.lastAccessed = new Date();
    await url.save();

    res.redirect(url.originalUrl);
  } catch (error) {
    res.status(500).json({ error: 'Error redirecting URL' });
  }
};
