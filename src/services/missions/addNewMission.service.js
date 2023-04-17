const Boom = require("@hapi/boom");
const {
  siteDB,
  missionDB,
  siteDroneDB,
  categoryDB,
} = require("../../dataAccess");

const { isDef, getShortId } = require("../../helpers");

const addANewMission = async ({ body, params }) => {
  const { siteId } = params;
  const { alt, speed, name, waypoints, siteDroneId, categoryId } = body;

  if (!isDef(siteId) || siteId == "") {
    throw Boom.badData("site id required");
  }

  const siteAsync = siteDB.findOne({ _id: siteId });
  const siteDroneAsync = siteDroneDB.findOne({ _id: siteDroneId });
  const categoryAsync = categoryDB.findOne({ _id: categoryId });

  const promised = [categoryAsync, siteDroneAsync, siteAsync].map(
    async (a) => await a
  );
  const [category, siteDrone, site] = await Promise.all(promised);

  if (!isDef(category)) {
    throw Boom.notFound("category not found");
  }

  if (!isDef(siteDrone)) {
    throw Boom.notFound("site drone not found");
  }

  if (!isDef(site)) {
    throw Boom.notFound("site not found");
  }

  const missionObject = {
    alt,
    speed,
    name,
    waypoints,
    siteDrone: siteDroneId,
    category: categoryId,
  };

  const mission = await missionDB.insert(missionObject);

  return mission;
};

module.exports = addANewMission;
