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

module.exports = router;