const mongoose = require('mongoose');

const StudentSchema = mongoose.Schema({
  name: String,
  age: Number,
  subject: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Subject"
  }
});

const Student = mongoose.model('Student', StudentSchema);

const find = function (cb) {
  Student.find({}).populate('subject').exec(function (err, data) {
    cb(data);
  });
}

const findById = function (id, cb) {
  Student.findById(id).exec(function (err, data) {
    cb(data);
  });
}

const create = function (inputs, cb) {
  const newStudent = new Student(inputs);

  newStudent.save(function() {
    cb();
  });
}

const update = function (id, newObject, cb) {
  Student.updateOne({ _id: id }, { $set: newObject }, function() {
    cb();
  });
}

const remove = function (id, cb) {
  Student.deleteOne({ _id: id }, function() {
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