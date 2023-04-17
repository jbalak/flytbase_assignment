const Boom = require("@hapi/boom");
const { categoryDB } = require("../../dataAccess");

const { isDef, getShortId } = require("../../helpers");

const addANewCategory = async ({ body }) => {
  const { name, color, tagName } = body;

  if (!isDef(name) || name == "") {
    throw Boom.badData("valid category name is required");
  }

  const category = await categoryDB.findOne({ name });

  if (isDef(category)) {
    throw Boom.conflict("category already exists");
  }

  const categoryObject = {
    name,
    color,
    tagName,
  };

  let savedCategory = await categoryDB.insert(categoryObject);
  return savedCategory;
};

module.exports = addANewCategory;
