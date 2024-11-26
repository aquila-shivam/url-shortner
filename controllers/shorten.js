const Url = require('../models/Url');
const shortid = require('shortid');

exports.shortenUrl = async (req, res) => {
  const { originalUrl } = req.body;

  if (!originalUrl) return res.status(400).json({ error: 'URL is required' });

  try {
    const shortId = shortid.generate();
    const newUrl = new Url({ originalUrl, shortId });
    await newUrl.save();

    res.status(201).json({ shortUrl: `${process.env.BASE_URL}/${shortId}` });
  } catch (error) {
    res.status(500).json({ error: 'Error creating short URL' });
  }
};
