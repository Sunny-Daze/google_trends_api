const express = require("express");
const { trendAverages } = require("../controllers/trendAverages");
const router = express.Router();

router.get("/trend-averages/:keyword", trendAverages);

module.exports = router;