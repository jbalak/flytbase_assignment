const { Schema, model } = require("mongoose");

const sitesSchema = new Schema(
  {
    siteName: { type: String, required: true },
    siteId: { type: String, required: true, unique: true },
    lat: { type: Number, required: true },
    long: { type: Number, required: true },
  },
  { timestamps: true }
);

const siteModel = model("Site", sitesSchema);
module.exports = { Site: siteModel };
