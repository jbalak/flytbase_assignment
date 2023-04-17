require("dotenv").config();
const { JWT_SECRET, MONGO_URI, PORT } = process.env;
module.exports = Object.freeze({
  jtwSecret: JWT_SECRET,
  mongoUri: MONGO_URI,
  port: PORT,
});
