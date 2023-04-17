const { siteDroneServices } = require("../services");

module.exports = Object.freeze({
  addDroneToSite: siteDroneServices.addDroneToSite,
  deleteDroneToSite: siteDroneServices.deleteDroneToSite,
  updateDroneToSite: siteDroneServices.updateDroneToSite,
  deleteDroneInASite: siteDroneServices.deleteDroneInASite,
  getAllDronesInASite: siteDroneServices.getAllDronesInASite,
});
