const express = require("express");

const dronesCtrl = require("../controllers/drones.controller");
const makeExpressCallback = require("./expressCallback");

const router = express.Router();

router.post("/drones", makeExpressCallback(dronesCtrl.addNewDrone));
router.get("/drones", makeExpressCallback(dronesCtrl.getAllDrones));
router.get("/drones/:droneId", makeExpressCallback(dronesCtrl.getADrone));
router.patch("/drones/:droneId", makeExpressCallback(dronesCtrl.addNewDrone));
router.delete("/drones/:droneId", makeExpressCallback(dronesCtrl.addNewDrone));

module.exports = router;
