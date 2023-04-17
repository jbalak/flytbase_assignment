// /use-cases/orders/index.js

const addNewMission = require("./addNewMission.service");
const deleteAMission = require("./deleteAMission.service");
const getAllMissions = require("./getAllMissions.service");
const updateAMission = require("./updateAMission.service");

// Export a service containing all Use Cases ...

module.exports = Object.freeze({
  addNewMission,
  deleteAMission,
  getAllMissions,
  updateAMission,
});
