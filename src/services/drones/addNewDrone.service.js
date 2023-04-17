const Boom = require("@hapi/boom");
const { droneDB } = require("../../dataAccess");

const { isDef, getShortId } = require("../../helpers");

const addNewDrone = async ({ body, headers }) => {
  const { name, droneType, makeName } = body;

  if (!isDef(name) || name == "") {
    throw Boom.badData("Drone name should be valid");
  }

  const droneId = getShortId();
  const droneObject = { name, droneId };

  if (isDef(droneType)) {
    droneObject.droneType = droneType;
  }
  if (isDef(makeName)) {
    droneObject.makeName = makeName;
  }

  const droneDetails = await droneDB.findOne({ droneId });

  if (isDef(droneDetails)) {
    throw Boom.conflict("pls retry again");
  }

  const savedData = await droneDB.insert(droneObject);
  return savedData;
};

module.exports = addNewDrone;
