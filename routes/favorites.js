var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Favorites = require('../models/favorites.js');

/* GET /api/user/favorites */
router.get('/', function (req, res, next) {
  Favorites.find(function (err, data) {
    if (err) return next(err);
    res.json(data);
  });
});

/* GET /api/user/favorites/id */
// we use findOne isntead of findById due id is not mongo _id
router.get('/:id', function (req, res, next) {
  Favorites.findOne({id: req.params.id}, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT  /api/user/favorites/id */
// we use findOneAndUpdate isntead of findByIdAndUpdate due id is not mongo _id
router.put('/:id', function (req, res, next) {
  Favorites.findOneAndUpdate({id: req.params.id}, req.body, function (err, item) {
    if (err) return next(err);

    if(item) {
      res.json(item);
    } else {
      Favorites.create(req.body, function (err, item) {
        if (err) return next(err);
        res.json(item);
      });
    }
  });
});


module.exports = router;