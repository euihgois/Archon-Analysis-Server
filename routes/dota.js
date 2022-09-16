const express = require("express");
const router = express.Router();
const Controller = require("../controllers/dota");

router.get("/heroes", Controller.getHeroes);
router.get("/match/analysis/:hero_id", Controller.analysis);
router.get("/benchmarks/:hero_id", Controller.benchmarks);

module.exports = router;
