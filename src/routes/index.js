const express = require("express");
const router = express.Router();

const userRoutes = require("./users.routes");
const droneRoutes = require("./drones.routes");
const sitesRoutes = require("./sites.routes");
const missionRoutes = require("./missions.routes");
const categoriesRoutes = require("./categories.routes");
// router.use(userRoutes);
router.use(droneRoutes);
router.use(sitesRoutes);
router.use(missionRoutes);
router.use(categoriesRoutes);
module.exports = router;
