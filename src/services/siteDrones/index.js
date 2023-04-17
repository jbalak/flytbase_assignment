// /use-cases/orders/index.js

const addDroneToSite = require("./addDroneToSite.service");
const updateDroneToSite = require("./updateDroneToSite.service");
const deleteDroneInASite = require("./deleteDroneInASite.service");
const getAllDronesInASite = require("./getAllDronesInASite.service");

// Export a service containing all Use Cases ...
module.exports = Object.freeze({
  addDroneToSite,
  updateDroneToSite,
  deleteDroneInASite,
  getAllDronesInASite,
});
