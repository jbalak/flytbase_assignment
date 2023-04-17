const { Schema, Types, model } = require("mongoose");
const { ObjectId } = Types;
const siteDroneSchema = new Schema(
  {
    drone: { type: ObjectId, ref: "Drone", required: true, index: true },
    user: { type: ObjectId, ref: "User", required: true, index: true },
    site: { type: ObjectId, ref: "Site", required: true, index: true },
    active: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const siteDroneModel = model("SiteDrone", siteDroneSchema);
module.exports = { SiteDrone: siteDroneModel };
