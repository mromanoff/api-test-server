var express = require('express');
var router = express.Router();

var insuranceDetails = require('../models/insurance-details.js');

/* POST /api/user/insurance-details */
router.post('/', function (req, res, next) {
  insuranceDetails.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


module.exports = router;