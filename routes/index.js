const router = require("express").Router();
const parentRoute = require("./parent");
router.use("/parent", parentRoute);

module.exports = router;
