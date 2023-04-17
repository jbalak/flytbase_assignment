const { Drone } = require("../models");
const findOne = async (filter, options = {}) => {
  const { populate, sort } = options;
  const query = Drone.findOne(filter);
  if (sort) query.sort(sort);
  (populate || []).forEach((p) => query.populate(p));
  return await query.lean().exec();
};
const insert = async (info) => {
  return Drone.create(info);
};
const update = async (filter, info) => {
  return Drone.findOneAndUpdate(filter, info, { new: true });
};
const remove = async (_id) => {
  const res = await Drone.deleteOne({ _id });
  return {
    found: res.n,
    deleted: res.deletedCount,
  };
};
const find = async (filter, options = {}) => {
  const { populate } = options;
  const query = Drone.find(filter);
  if (populate) (populate || []).forEach((p) => query.populate(p));
  return query.lean().exec();
};
const aggregate = async (pipeline = []) => {
  return Drone.aggregate(pipeline);
};
const paginate = async (query, options) => {
  const { sort, populate, page, limit } = options;
  return await Drone.find(query).limit(limit).sort(sort).populate(populate);
};
module.exports = Object.freeze({
  findOne,
  insert,
  update,
  remove,
  find,
  aggregate,
  paginate,
});
