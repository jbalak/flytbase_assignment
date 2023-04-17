const Boom = require("@hapi/boom");
const { droneDB, siteDB, userDB, siteDroneDB } = require("../../dataAccess");

const { isDef } = require("../../helpers");

const getAllDronesInASite = async ({ body, params }) => {
  const { siteId } = params;
  const populate = [
    {
      path: "drone",
    },
  ];
  const siteDrones = await siteDroneDB.find({ site: siteId }, { populate });

  const drones = siteDrones.map((s) => s.drone);

  return drones;
};

module.exports = getAllDronesInASite;
