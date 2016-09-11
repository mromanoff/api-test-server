var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Styles = require('../models/style.js');

/* GET /api/styles listing. */
router.get('/', function (req, res, next) {
  Styles.find(function (err, data) {
    if (err) return next(err);
    res.json(data);
  });
});

/* GET /api/styles/id */
router.get('/:id', function (req, res, next) {
  Styles.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;