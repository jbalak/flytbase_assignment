const express = require("express");

const sitesCtrl = require("../controllers/sites.controller");
const siteDroneCtrl = require("../controllers/siteDrone.controller");
const makeExpressCallback = require("./expressCallback");

const router = express.Router();

router.post("/sites", makeExpressCallback(sitesCtrl.addNewSite));
router.get("/sites", makeExpressCallback(sitesCtrl.getAllSites));
router.get("/sites/:siteId", makeExpressCallback(sitesCtrl.getASite));
router.patch("/sites/:siteId", makeExpressCallback(sitesCtrl.getASite));

//siteDrones
router.post(
  "/sites/:siteId/siteDrones",
  makeExpressCallback(siteDroneCtrl.addDroneToSite)
);

router.get(
  "/sites/:siteId/drones",
  makeExpressCallback(siteDroneCtrl.getAllDronesInASite)
);

router.patch(
  "/sites/:siteId/siteDrones/:siteDroneId",
  makeExpressCallback(siteDroneCtrl.updateDroneToSite)
);

router.delete(
  "/sites/:siteId/siteDrones/:siteDroneId/drones/:droneId",
  makeExpressCallback(siteDroneCtrl.deleteDroneInASite)
);

module.exports = router;
