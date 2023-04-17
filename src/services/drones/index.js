// /use-cases/orders/index.js

const addNewDrone = require("./addNewDrone.service");
const getADrone = require("./getANewDrone.service");
const getAllDrones = require("./getAllNewDrones.service");

// Export a service containing all Use Cases ...

module.exports = Object.freeze({
  addNewDrone,
  getADrone,
  getAllDrones,
});
