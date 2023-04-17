const Boom = require("@hapi/boom");
const { missionDB } = require("../../dataAccess");

const { isDef, getShortId } = require("../../helpers");

const deleteAMission = async ({ params }) => {
  const { missionId } = params;

  let deletedMission = await missionDB.remove({ _id: missionId });

  if (deleteAMission?.deleted != 1) {
    throw Boom.notFound("given mission already deleted or not found");
  }
  return deletedMission;
};

module.exports = deleteAMission;
