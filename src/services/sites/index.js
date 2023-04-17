// /use-cases/orders/index.js

const addNewSite = require("./addNewSite.service");
const getASite = require("./getASite.service");
const getAllSites = require("./getAllSites.service");

// Export a service containing all Use Cases ...

module.exports = Object.freeze({
  addNewSite,
  getASite,
  getAllSites,
});
