const Boom = require("@hapi/boom");
const { userDB } = require("../../dataAccess");
const {
  isDef,
  getJWTToken,
  cryptPassword,
  comparePassword,
} = require("../../helpers");

const login = async ({ body, headers }) => {
  const { username, password } = body;

  if (!isDef(username)) {
    throw Boom.badData("username is required");
  }

  if (!isDef(password)) {
    throw Boom.badData("password is required");
  }

  const dbUser = await userDB.findOne({ username });
  if (!isDef(dbUser)) {
    throw Boom.notFound("user not found");
  }
  let dbPassword = dbUser.password;
  let isPasswordValid = comparePassword(password, dbPassword);

  if (!isPasswordValid) {
    throw Boom.unauthorized("invalid password");
  }

  let userPayload = { _id: dbUser._id, role: dbUser.role };
  let token = getJWTToken(userPayload);
  delete dbUser["password"];
  return { token, user: dbUser };
};

module.exports = login;
