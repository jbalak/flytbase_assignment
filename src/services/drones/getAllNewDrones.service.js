const Boom = require("@hapi/boom");
const { droneDB } = require("../../dataAccess");

const { isDef, getShortId } = require("../../helpers");

const getAllDrones = async ({ params }) => {
  let drones = await droneDB.find({});

  if (!isDef(drones)) {
    drones = [];
  }

  return drones;
};

module.exports = getAllDrones;
