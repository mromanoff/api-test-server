var express = require('express');
var router = express.Router();

var Insurance = require('../models/insurance.js');

/* GET /api/insurance listing. */
router.get('/', function (req, res, next) {
  Insurance.find(function (err, data) {

    console.log('data', data);

    if (err) return next(err);
    res.json(data);
  });
});


/* POST /api/insurance */
router.post('/', function (req, res, next) {
  Insurance.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;