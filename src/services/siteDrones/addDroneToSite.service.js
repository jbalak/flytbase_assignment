const Boom = require("@hapi/boom");
const { droneDB, siteDB, userDB, siteDroneDB } = require("../../dataAccess");

const { isDef } = require("../../helpers");

const addDroneToASite = async ({ body, params }) => {
  const { droneId, userId } = body;
  const { siteId } = params;
  if (!isDef(siteId) || siteId == "") {
    throw Boom.badData("site id required");
  }
  if (!isDef(droneId) || droneId == "") {
    throw Boom.badData("drone id is required");
  }

  if (!isDef(userId) || userId == []) {
    throw Boom.badData("user id is required");
  }

  const siteAsync = siteDB.findOne({ _id: siteId });
  const userAsync = userDB.findOne({ _id: userId });
  const droneAsync = droneDB.findOne({ _id: droneId });

  let promisedRes = [siteAsync, userAsync, droneAsync].map(async (a) => {
    return await a;
  });
  promisedRes = await Promise.all(promisedRes);

  const [site, user, drone] = promisedRes;

  if (!isDef(site)) {
    throw Boom.notFound("site data not found");
  }
  if (!isDef(user)) {
    throw Boom.notFound("user data not found");
  }
  console.log({ drone });
  if (!isDef(drone)) {
    throw Boom.notFound("drone data not found");
  } else if (drone.occupied) {
    throw Boom.badRequest("drone is occupied at the moment");
  }

  const siteDroneObject = {
    user: userId,
    site: siteId,
    drone: droneId,
  };

  const data = await siteDroneDB.insert(siteDroneObject);

  //update drone status after assigning
  await droneDB.update({ _id: droneId }, { occupied: true });

  return data;
};

module.exports = addDroneToASite;
