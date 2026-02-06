const shortid = require("shortid");
const Url = require("../models/Url");

// Create Short URL
exports.createShortUrl = async (req, res) => {
  try {
    const { originalUrl } = req.body;

    const shortCode = shortid.generate();

    const newUrl = new Url({
      originalUrl,
      shortCode
    });

    await newUrl.save();

    res.json({
      shortUrl: `http://localhost:5000/${shortCode}`
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};



// ✅ Redirect Short URL + Increment Click Count
exports.redirectUrl = async (req, res) => {
  try {
    const url = await Url.findOne({ shortCode: req.params.code });

    if (!url) {
      return res.status(404).send("URL not found");
    }
    return res.redirect(url.originalUrl);
  } catch (error) {
    res.status(500).send("Server Error");
  }
};