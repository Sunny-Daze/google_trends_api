const express = require("express");
const { interestOverTimeKeyword, interestOverTimeKeywordPast12M, interestOverTimeKeywordCustomDates } = require("../controllers/interestOverTime");
const router = express.Router();

router.get("/interest-over-time/:keyword", interestOverTimeKeyword);
router.get("/interest-over-time-past12M/:keyword", interestOverTimeKeywordPast12M);
router.get("/interest-over-time-customDates/:keyword/:fromDY/:fromDM/:fromDD/:toDY/:toDM/:toDD", interestOverTimeKeywordCustomDates);

module.exports = router;