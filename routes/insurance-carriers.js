var express = require('express');
var router = express.Router();

var insuranceCarriers = require('../models/insurance-carriers.js');

/* GET /api/insurance listing. */
router.get('/', function (req, res, next) {
  insuranceCarriers.find(function (err, data) {
    if (err) return next(err);
    res.json(data);
  });
});


/* POST /api/insurance */
router.post('/', function (req, res, next) {
  insuranceCarriers.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;