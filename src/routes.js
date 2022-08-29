const express = require("express");
const router = express.Router();

const swap = require("./services/swap").default;
const refresh = require("./services/refresh").default;

router.post("/swap", swap);
router.post("/refresh", refresh);

exports.default = router;
