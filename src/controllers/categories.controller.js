const { categoryServices } = require("../services");

module.exports = Object.freeze({
  addNewCategory: categoryServices.addNewCategory,
  getAllCategories: categoryServices.getAllCategories,
});
