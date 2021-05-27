const mongoose = require('mongoose');

const SubjectSchema = mongoose.Schema({
  label: String
});

const Subject = mongoose.model('Subject', SubjectSchema);

const find = function (cb) {
  Subject.find({}).exec(function (err, data) {
    cb(data);
  });
}

const findById = function (id, cb) {
  Subject.findById(id).exec(function (err, data) {
    cb(data);
  });
}

const create = function (inputs, cb) {
  const newSubject = new Subject(inputs);

  newSubject.save(function() {
    cb();
  });
}

const update = function (id, newObject, cb) {
  Subject.updateOne({ _id: id }, { $set: newObject }, function() {
    cb();
  });
}

const remove = function (id, cb) {
  Subject.deleteOne({ _id: id }, function() {
    cb();
  });
}

module.exports = {
  find: find,
  findById: findById,
  create: create,
  update: update,
  remove: remove
};