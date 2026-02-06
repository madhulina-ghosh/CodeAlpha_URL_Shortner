const express = require("express");
const router = express.Router();
const { createShortUrl, redirectUrl, getUrlStats } = require("../controllers/urlControllers");

router.post("/shorten", createShortUrl);
router.get("/:code", redirectUrl);

module.exports = router;
