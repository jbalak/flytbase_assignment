const categoryDB = require("./category.db");
const droneDB = require("./drone.db");
const missionDB = require("./mission.db");
const siteDB = require("./site.db");
const userDB = require("./user.db");
const siteDroneDB = require("./siteDrone.db");

module.exports = Object.freeze({
  categoryDB,
  droneDB,
  missionDB,
  siteDB,
  userDB,
  siteDroneDB,
});
