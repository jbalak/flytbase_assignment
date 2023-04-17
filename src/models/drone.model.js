const { Schema, Types, model } = require("mongoose");
const { ObjectId } = Types;
const droneSchema = new Schema(
  {
    name: { type: String, required: true },
    droneId: { type: String, required: true, unique: true, index: true },
    deletedBy: { type: ObjectId, ref: "User" },
    deletedOn: { type: Date },
    droneType: { type: String },
    makeName: { type: String },
    occupied: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const droneModel = model("Drone", droneSchema);
module.exports = { Drone: droneModel };
