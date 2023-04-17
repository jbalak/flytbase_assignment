const { userDB } = require("../../dataAccess");
const { isDef, cryptPassword, isPasswordSecure } = require("../../helpers");
const { USER_TYPE } = require("../../helpers/constants");
const Boom = require("@hapi/boom");

const signup = async ({ body, headers }) => {
  const { name, username, password, newPassword } = body;

  if (!isDef(name)) {
    throw Boom.badRequest("name is required");
  }

  if (!isDef(username)) {
    throw Boom.badRequest("username is required");
  } else if (username.trim().includes(" ")) {
    throw Boom.badRequest("no space is allowd in username");
  }

  if (!isDef(password)) {
    throw Boom.badRequest("password is required");
  }

  if (!isDef(newPassword)) {
    throw Boom.badRequest("newPassword is required");
  }

  if (!isPasswordSecure(password)) {
    throw Boom.badRequest("more secure password required");
  }

  if (password != newPassword) {
    throw Boom.badRequest("password and reentered password should match");
  }

  //check user already exists
  let dbUser = await userDB.findOne({
    username: username,
  });

  if (isDef(dbUser)) {
    throw Boom.badRequest("user already exists with this username");
  }

  let encryptedPassword = await cryptPassword(password);
  const userObject = {
    name,
    username,
    password: encryptedPassword,
  };

  const savedUser = await userDB.insert(userObject);

  return savedUser;
};

module.exports = signup;
