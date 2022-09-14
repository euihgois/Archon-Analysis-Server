const express = require("express");
const router = express.Router();
const Controller = require("../controllers/dota");

router.get("/", Controller.getMatch);

module.exports = router;
