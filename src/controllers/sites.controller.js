const { siteServices } = require("../services");

module.exports = Object.freeze({
  addNewSite: siteServices.addNewSite,
  getASite: siteServices.getASite,
  getAllSites: siteServices.getAllSites,
});
