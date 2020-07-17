const router = require("express").Router();
const parentRoute = require("./parent");
const agencyRoute = require("./agency");

router.use("/parent", parentRoute);

router.use("/agency", agencyRoute);

module.exports = router;
