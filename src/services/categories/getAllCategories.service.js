const Boom = require("@hapi/boom");
const { categoryDB } = require("../../dataAccess");

const { isDef, getShortId } = require("../../helpers");

const getAllCategories = async ({ body }) => {
  const categories = await categoryDB.find();

  return categories;
};

module.exports = getAllCategories;
