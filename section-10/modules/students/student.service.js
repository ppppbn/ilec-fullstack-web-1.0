const repository = require('./student.repository');

const find = function (cb) {
  // Business logic

  // Querying
  repository.find(cb);
}

const create = function (inputs, cb) {
  // Business logic

  // Data validation

  // Persist data
  repository.create(inputs, cb);
}

const update = function (id, newObject, cb) {
  // Business logic

  // Persist data
  repository.update(id, newObject, cb);
}

const remove = function (id, cb) {
  repository.remove(id, cb);
}

module.exports = {
  find: find,
  create: create,
  update: update,
  remove: remove
};