const express = require("express");
const router = express.Router();

router.use("/", require("./user"));
router.use(require("../middlewares/authentication").authentication);
router.use("/account", require("./account"));
router.use("/dota", require("./dota"));
router.use(require("../middlewares/error-handler"));

module.exports = router;
