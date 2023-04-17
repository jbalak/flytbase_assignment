const { Schema, Types, model } = require("mongoose");
const { ObjectId } = Types;
const userDroneSchema = new Schema(
  {
    user: { type: ObjectId, ref: "User", required: true, index: true },
    drone: { type: ObjectId, ref: "Drone", required: true, index: true },
    active: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const userDroneModel = model("UserDrone", userDroneSchema);
module.exports = { UserDrone: userDroneModel };
