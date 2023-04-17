const Boom = require("@hapi/boom");
const { siteDroneDB, missionDB } = require("../../dataAccess");

const { isDef, getShortId } = require("../../helpers");

//search missions with category
const getAllMissions = async ({ params, query }) => {
  const { siteId } = params;
  const { categoryId } = query;

  const sitedrones = await siteDroneDB.find({
    site: siteId,
  });

  let siteDroneIds = sitedrones.map((s) => s._id);

  let missions = [];
  const missionFilter = {
    sitedrone: { $in: siteDroneIds },
  };

  if (isDef(categoryId)) {
    missionFilter.category = categoryId;
  }

  if (siteDroneIds.length != 0) {
    missions = await missionDB.find(missionFilter);
  }

  return missions;
};

module.exports = getAllMissions;
