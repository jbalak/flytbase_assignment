const { Mission } = require("../models");
const findOne = async (filter, options = {}) => {
  const { populate, sort } = options;
  const query = Mission.findOne(filter);
  if (sort) query.sort(sort);
  (populate || []).forEach((p) => query.populate(p));
  return query.lean().exec();
};
const insert = async (info) => {
  return Mission.create(info);
};
const update = async (filter, info) => {
  return Mission.findOneAndUpdate(filter, info, { new: true });
};
const remove = async (_id) => {
  const res = await Mission.deleteOne({ _id });
  return {
    found: res.n,
    deleted: res.deletedCount,
  };
};
const find = async (filter, options = {}) => {
  const { populate } = options;
  const query = Mission.find(filter);
  if (populate) (populate || []).forEach((p) => query.populate(p));
  return query.lean().exec();
};
const aggregate = async (pipeline = []) => {
  return Mission.aggregate(pipeline);
};
const paginate = async (query, options) => {
  const { sort, populate, page, limit } = options;
  return await Mission.find(query).limit(limit).sort(sort).populate(populate);
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
