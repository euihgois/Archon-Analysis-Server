const express = require("express");
const router = express.Router();
const Controller = require("../controllers/dota");

router.get("/heroes", Controller.getHeroes);
router.post("/match/analysis", Controller.analysis);
router.get("/benchmarks/:hero_id", Controller.benchmarks);

module.exports = router;
