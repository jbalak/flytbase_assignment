const { Schema, model, Types } = require("mongoose");
const { ObjectId } = Types;
const geoSchema = new Schema(
  {
    alt: { type: Number },
    lat: { type: Number },
    lng: { type: Number },
  },
  { _id: false }
);

const missionSchema = new Schema(
  {
    alt: { type: Number },
    speed: { type: Number },
    name: { type: String },
    waypoints: [geoSchema],
    category: { type: ObjectId, ref: "Category", required: true },
    siteDrone: {
      type: ObjectId,
      ref: "SiteDrone",
      required: true,
      index: true,
    },
  },
  { timestamps: true }
);

const missionModel = model("Mission", missionSchema);
module.exports = { Mission: missionModel };
