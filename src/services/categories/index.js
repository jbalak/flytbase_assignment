// /use-cases/orders/index.js

const addNewCategory = require("./addNewCategory.service");
const getAllCategories = require("./getAllCategories.service");
// Export a service containing all Use Cases ...

module.exports = Object.freeze({
  addNewCategory,
  getAllCategories,
});
