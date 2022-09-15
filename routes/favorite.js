const express = require("express");
const router = express.Router();
const Controller = require("../controllers/favorite");

router.get("/", Controller.get);
router.post("/add", Controller.addFavorite);

module.exports = router;
