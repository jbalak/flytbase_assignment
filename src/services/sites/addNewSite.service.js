const Boom = require("@hapi/boom");
const { siteDB } = require("../../dataAccess");

const { isDef, getShortId } = require("../../helpers");

const addNewSite = async ({ body, headers }) => {
  const { siteName, lat, long } = body;

  if (!isDef(siteName) || siteName == "") {
    throw Boom.badData("site name should be valid");
  }
  if (!isDef(lat)) {
    throw Boom.badData("site lat and long should be valid");
  }
  if (!isDef(long)) {
    throw Boom.badData("site lat and long should be valid");
  }

  const siteId = getShortId();
  const siteObject = { siteName, siteId, lat, long };

  const siteDetails = await siteDB.findOne({ siteId });

  if (isDef(siteDetails)) {
    throw Boom.conflict("pls retry again");
  }

  const savedData = await siteDB.insert(siteObject);
  return savedData;
};

module.exports = addNewSite;
