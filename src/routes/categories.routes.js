const express = require("express");

const categoriesCtrl = require("../controllers/categories.controller");
const makeExpressCallback = require("./expressCallback");

const router = express.Router();

router.post("/categories", makeExpressCallback(categoriesCtrl.addNewCategory));
router.get("/categories", makeExpressCallback(categoriesCtrl.getAllCategories));

module.exports = router;
