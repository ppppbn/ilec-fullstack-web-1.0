const express = require('express');
const app = express();
const mongoose = require('mongoose');
const configs = require('./config/index.js');
const studentRouter = require('./modules/students/student.router');
const subjectRouter = require('./modules/subjects/subject.router');

mongoose.connect(configs.MONGO_CONNECTION_URL);

app.use(express.json());
app.use('/api/students', studentRouter.router);
app.use('/api/subjects', subjectRouter.router);

app.listen(configs.PORT, function () {
  console.log(`Server listening on port ${configs.PORT}`);
});