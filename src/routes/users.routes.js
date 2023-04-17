const express = require("express");

const userCtrl = require("../controllers/users.controller");
const makeExpressCallback = require("./expressCallback");
const { routes } = require("../app");
const router = express.Router();

router.get("/users", makeExpressCallback(userCtrl.getAllUsers));
router.get("/users/:userId", makeExpressCallback(userCtrl.getAUser));
router.patch(
  "/users/:userId",
  makeExpressCallback(userCtrl.updateUserAvailibilityStatus)
);

module.exports = router;
