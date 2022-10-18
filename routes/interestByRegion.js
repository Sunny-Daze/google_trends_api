const express = require("express");
const { interestByRegionKeyword, interestByRegionKeywordPast12M, interestByRegionKeywordCustomDates } = require("../controllers/interestByRegion");
const router = express.Router();

router.get("/interest-by-region/:keyword", interestByRegionKeyword);
router.get("/interest-by-region-past12M/:keyword", interestByRegionKeywordPast12M);
router.get("/interest-by-region-customDates/:keyword/:fromDY/:fromDM/:fromDD/:toDY/:toDM/:toDD", interestByRegionKeywordCustomDates);

module.exports = router;