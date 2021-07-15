const repository = require('./category.repository');
const authService = require('../auth/auth.service');

const find = function (query, user) {
  if (!authService.authorization(user, ['ADMIN', 'USER'])) {
    throw new Error('You dont have permission to enter this resource');
  }
  // Transform query - Data validation
  const supportedQueryFields = ['title', 'description'];

  Object.keys(query).forEach(function (key) {
    if (!supportedQueryFields.includes(key)) {
      throw new Error(`Unrecognized field: ${key}`);
    }
  });

  // Querying
  return repository.find(query);
}

const create = function (inputs) {
  // Business logic

  // Data validation

  // Persist data
  return repository.create(inputs);
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