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

router.put('/:id', async function(req, res) {
  try {
    const result = await service.update(req.params.id, req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

router.delete('/:id', function (req, res) {
  service.remove(req.params.id, function () {
    res.send("OK");
  });
})

module.exports = {
  router: router
};