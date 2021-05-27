const express = require('express');
const router = express.Router();
const service = require('./subject.service');

router.get('/', function(req, res) {
  service.find(function (data) {
    res.json(data);
  });
});

router.post('/', function(req, res) {
  service.create(req.body, function(data) {
    res.send("OK");
  });
});

router.put('/:id', function(req, res) {
  service.update(req.params.id, req.body, function () {
    res.send("OK");
  });
});

router.delete('/:id', function (req, res) {
  service.remove(req.params.id, function () {
    res.send("OK");
  });
})

module.exports = {
  router: router
};