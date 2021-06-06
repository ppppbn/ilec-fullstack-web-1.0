const repository = require('./subject.repository');

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

const update = function (id, newObject) {
  // Business logic

  // Persist data
  return repository.update(id, newObject);
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