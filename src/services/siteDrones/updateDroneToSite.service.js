const Boom = require("@hapi/boom");
const { droneDB, siteDB, userDB, siteDroneDB } = require("../../dataAccess");

const { isDef } = require("../../helpers");

const updateDroneInASite = async ({ body, params }) => {
  // check if all details exists
  // check if new drone actually exist
  // update new drone to existing site and
  // update new and old drones status as occupied and free respectively

  const { newDroneId } = body;
  const { siteDroneId } = params;

  if (!isDef(siteDroneId) || siteDroneId == "") {
    throw Boom.badData("site drone id required");
  }

  if (!isDef(newDroneId) || newDroneId == "") {
    throw Boom.badData("new drone id required");
  }

  const newDroneAsync = droneDB.findOne({ _id: newDroneId });
  const siteDroneAsync = siteDroneDB.findOne({ _id: siteDroneId });

  const promised = [newDroneAsync, siteDroneAsync].map(async (a) => await a);
  const [newDrone, siteDrone] = await Promise.all(promised);

  if (!isDef(newDrone)) {
    throw Boom.notFound("new drone not found");
  } else if (newDrone.occupied) {
    throw Boom.badRequest("new drone is already occupied");
  }

  if (!isDef(siteDrone)) {
    throw Boom.notFound("site drone not found");
  }

  const update = {
    drone: newDroneId,
  };

  const updateedData = await siteDroneDB.update(
    {
      _id: siteDroneId,
    },
    update
  );
  console.log({ siteDrone });
  const updateOldDroneAsync = droneDB.update(
    { _id: siteDrone.drone },
    { occupied: false }
  );
  const updatNnewDroneAsync = droneDB.update(
    { _id: newDroneId },
    { occupied: true }
  );
  const droneUpdatePromise = [updateOldDroneAsync, updatNnewDroneAsync].map(
    async (a) => await a
  );
  await Promise.all(droneUpdatePromise);

  return updateedData;
};

module.exports = updateDroneInASite;
