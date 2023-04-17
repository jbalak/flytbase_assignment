const Boom = require("@hapi/boom");
const { droneDB } = require("../../dataAccess");

const { isDef, getShortId } = require("../../helpers");

const getADrone = async ({ params }) => {
  const { droneId } = params;
  console.log({ params });
  const drone = await droneDB.findOne({ droneId });
  console.log({ drone });
  if (!isDef(drone)) {
    throw Boom.notFound("Drone not found with this id");
  }

  return drone;
};

module.exports = getADrone;
