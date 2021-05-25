const express = require('express');
const app = express();
const router = express.Router();

let students = [];

router.get('/students', function(req, res) {
  res.json(students);
});

router.post('/students', function(req, res) {
  students.push(req.body);
  res.status(200).send(req.body);
});

router.put('/students/:id', function (req, res) {
  const studentId = req.params.id;
  const newStudent = req.body;

  students = students.map(function(item) {
    if (item.id === studentId) {
      return newStudent;
    }

    return item;
  });

  res.send(newStudent);
});

router.delete('/students/:id', function (req, res) {
  const studentId = req.params.id;

  students = students.filter(function(item) {
    return item.id !== studentId;
  });

  res.send({});
});

app.use(express.json());
app.use('/static', express.static(__dirname + '/images'));
app.use(router);

app.listen(3000, function () {
  console.log("Server listening on port 3000");
});

// FILE