const express = require("express");

const missionCtrl = require("../controllers/missions.controller");
const makeExpressCallback = require("./expressCallback");
const { routes } = require("../app");
const router = express.Router();

router.post(
  "/sites/:siteId/missions",
  makeExpressCallback(missionCtrl.addNewMission)
);
router.delete(
  "/sites/:siteId/missions/:missionId",
  makeExpressCallback(missionCtrl.deleteAMission)
);

router.get(
  "/sites/:siteId/missions",
  makeExpressCallback(missionCtrl.getAllMissions)
);
router.patch(
  "/sites/:siteId/missions/:missionId",
  makeExpressCallback(missionCtrl.updateAMission)
);

module.exports = router;
