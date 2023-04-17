const { droneServices } = require("../services");

module.exports = Object.freeze({
  addNewDrone: droneServices.addNewDrone,
  getADrone: droneServices.getADrone,
  getAllDrones: droneServices.getAllDrones,
});
