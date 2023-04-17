const { Schema, model } = require("mongoose");
const USER_TYPE = ["customer", "delivery", "admin"];

const userSchema = new Schema(
  {
    name: { type: String, trim: true, required: true },
    username: {
      type: String,
      unique: true,
      trim: true,
      lowerCase: true,
      required: true,
      index: true,
    },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

const userModel = model("User", userSchema);
module.exports = { User: userModel };
