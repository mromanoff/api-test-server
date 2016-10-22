var express = require('express');
var router = express.Router();

var Providers = require('../models/provider.js');
var Contact = require('../models/contact-provider.js');

/* GET /api/providers listing. */
router.get('/', function (req, res, next) {
  Providers.find(function (err, data) {
    if (err) return next(err);
    res.json(data);
  });
});

/* GET /api/providers/id */
// we use findOne instead of findById due id is not mongo _id
router.get('/:id', function (req, res, next) {
  Providers.findOne({id: req.params.id}, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


/* PUT  /api/providers/id */
// we use findOneAndUpdate instead of findByIdAndUpdate due id is not mongo _id
router.put('/:id', function (req, res, next) {
  Providers.findOneAndUpdate({id: req.params.id}, req.body, function (err, item) {
    if (err) return next(err);
    res.json(item);
  });
});


/* POST  /api/providers/:id/contact?action=appointment|call */
router.post('/:id/contact', function (req, res, next) {
  console.log('params:', req.params);
  console.log('query:', req.query);
  var body = Object.assign({}, req.body, {providerId: req.params.id, type: req.query.action});

  Contact.create(body, function (err, item) {
    if (err) return next(err);
    res.json(item);
  });
});


module.exports = router;