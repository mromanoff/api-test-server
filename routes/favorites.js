var express = require('express');
var router = express.Router();

//var Favorites = require('../models/favorites.js');
var Providers = require('../models/provider.js');


/* GET /api/user/favorites */
router.get('/', function (req, res, next) {
  Providers.find({isFavorite: true}, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;