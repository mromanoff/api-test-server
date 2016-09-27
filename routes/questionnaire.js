var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Questionnaire = require('../models/questionnaire.js');

/* GET /api/issues/questionnaire listing. */
router.get('/', function (req, res, next) {
  Questionnaire.find(function (err, data) {
    if (err) return next(err);
    res.json(data);
  });
});


/* GET /api/issues/questionnaire/id */
// we use findOne isntead of findById due id is not mongo _id
router.get('/:id', function (req, res, next) {
  Questionnaire.findOne({id: req.params.id}, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


/* PUT  /api/issues/questionnaire/id */
// we use findOneAndUpdate isntead of findByIdAndUpdate due id is not mongo _id
router.put('/:id', function (req, res, next) {
  Questionnaire.findOneAndUpdate({id: req.params.id}, req.body, {new: true}, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;