const Boom = require("@hapi/boom");
const { siteDroneDB, missionDB } = require("../../dataAccess");

const { isDef, getShortId } = require("../../helpers");

const updateANewMission = async ({ body, params }) => {
  const { missionId } = params;
  const { alt, speed, name, waypoints, category, siteDroneId } = body;

  const update = {
    alt,
    speed,
    name,
    waypoints,
    category,
  };

  if (isDef(siteDroneId)) {
    const siteDrone = await siteDroneDB.findOne({ _id: siteDroneId });
    if (!isDef(siteDrone)) {
      throw Boom.notFound("this site drone is not found");
    }

    update.siteDrone = siteDroneId;
  }

  let updatedMission = await missionDB.update({ _id: missionId }, update);
  return updatedMission;
};

module.exports = updateANewMission;
