var express = require('express');
var router = express.Router();

var Providers = require('../models/provider.js');

/* GET /api/provider listing. */
router.get('/', function (req, res, next) {
  Providers.find(function (err, data) {
    if (err) return next(err);
    res.json(data);
  });
});

/* GET /api/provider/id */
// we use findOne isntead of findById due id is not mongo _id
router.get('/:id', function (req, res, next) {
  Providers.findOne({id: req.params.id}, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


module.exports = router;