const express = require("express");
const router = express.Router();
const Controller = require("../controllers/account");

router.post("/", Controller.addSteamId);

module.exports = router;
