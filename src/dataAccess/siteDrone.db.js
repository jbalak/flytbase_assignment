const { SiteDrone } = require("../models");
const findOne = async (filter, options = {}) => {
  const { populate, sort } = options;
  const query = SiteDrone.findOne(filter);
  if (sort) query.sort(sort);
  (populate || []).forEach((p) => query.populate(p));
  return await query.lean().exec();
};
const insert = async (info) => {
  return SiteDrone.create(info);
};
const update = async (filter, info) => {
  return SiteDrone.findOneAndUpdate(filter, info, { new: true });
};
const remove = async (filter) => {
  const res = await SiteDrone.deleteOne(filter);
  return {
    found: res.n,
    deleted: res.deletedCount,
  };
};
const find = async (filter, options = {}) => {
  const { populate } = options;
  const query = SiteDrone.find(filter);
  if (populate) (populate || []).forEach((p) => query.populate(p));
  return query.lean().exec();
};
const aggregate = async (pipeline = []) => {
  return SiteDrone.aggregate(pipeline);
};
const paginate = async (query, options) => {
  const { sort, populate, page, limit } = options;
  return await SiteDrone.find(query).limit(limit).sort(sort).populate(populate);
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
