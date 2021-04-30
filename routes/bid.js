const express = require("express");
const router = express.Router();
const BidController = require("../controllers/bid");

//Create new business
router.post("/", BidController.create);

module.exports = router;
