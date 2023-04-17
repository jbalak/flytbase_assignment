const authServices = require("./auth");
const droneServices = require("./drones");
const siteServices = require("./sites");
const siteDroneServices = require("./siteDrones");
const missionServices = require("./missions");
const categoryServices = require("./categories");
module.exports = Object.freeze({
  authServices,
  droneServices,
  siteServices,
  siteDroneServices,
  missionServices,
  categoryServices,
});
