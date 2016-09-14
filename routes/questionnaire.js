var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Questionnaire = require('../models/questionnaire.js');

/* GET /api/questionnaire listing. */
router.get('/', function (req, res, next) {
  Questionnaire.find(function (err, data) {
    if (err) return next(err);
    res.json(data);
  });
});


/* GET /api/questionnaire/id */
router.get('/:id', function (req, res, next) {
  Questionnaire.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;