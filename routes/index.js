const router = require("express").Router();
const homeRoutes = require("./home-routes");
const searchRoutes = require("./search-routes");
const apiRoutes = require("./api/");

router.use("/", homeRoutes);
router.use("/search", searchRoutes);
router.use("/api", apiRoutes);

module.exports = router;
