const Boom = require("@hapi/boom");
const { siteDB } = require("../../dataAccess");

const { isDef } = require("../../helpers");

const getADrone = async ({ params }) => {
  const { siteId } = params;
  console.log({ params });
  const site = await siteDB.findOne({ siteId });
  console.log({ drone: site });
  if (!isDef(site)) {
    throw Boom.notFound("Drone not found with this id");
  }

  return site;
};

module.exports = getADrone;
