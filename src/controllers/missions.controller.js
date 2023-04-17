const { missionServices } = require("../services");

module.exports = Object.freeze({
  addNewMission: missionServices.addNewMission,
  deleteAMission: missionServices.deleteAMission,
  getAllMissions: missionServices.getAllMissions,
  updateAMission: missionServices.updateAMission,
});
