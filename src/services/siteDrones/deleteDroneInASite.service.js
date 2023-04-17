const Boom = require("@hapi/boom");
const { droneDB, siteDB, userDB, siteDroneDB } = require("../../dataAccess");

const { isDef } = require("../../helpers");

const deleteDroneInASite = async ({ body, params }) => {
  const { siteId, siteDroneId, droneId } = params;

  if (!isDef(siteDroneId)) {
    throw Boom.badData("sitedrone id required");
  }

  if (!isDef(droneId)) {
    throw Boom.badData("drone id required");
  }

  const siteDrone = await siteDroneDB.remove({
    _id: siteDroneId,
    drone: droneId,
    site: siteId,
  });

  await droneDB.update({ _id: droneId }, { occupied: false });

  return siteDrone;
};

module.exports = deleteDroneInASite;
