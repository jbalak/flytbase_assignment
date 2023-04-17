const Boom = require("@hapi/boom");
const { siteDB } = require("../../dataAccess");

const { isDef, getShortId } = require("../../helpers");

const getAllsites = async ({ params }) => {
  let sites = await siteDB.find({});

  if (!isDef(sites)) {
    sites = [];
  }

  return sites;
};

module.exports = getAllsites;
