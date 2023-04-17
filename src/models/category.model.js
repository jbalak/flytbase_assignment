const { Schema, model } = require("mongoose");

const categoriesSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    color: { type: String },
    tagName: { type: String },
  },
  { timestamps: true }
);

const missionModel = model("Category", categoriesSchema);
module.exports = { Category: missionModel };
