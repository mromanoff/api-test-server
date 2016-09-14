var express = require('express');
var router = express.Router();


var workRoutes = require('./work');
var contactsRoutes = require('./contact');
var stylesRoutes = require('./styles');
var providersRoutes = require('./providers');
var questionnaireRoutes = require('./questionnaire');

/** GET /health-check - Check service health */
router.get('/health-check', function(req, res) {
  res.send('OK');
});


router.use('/work', workRoutes);
router.use('/contact', contactsRoutes);
router.use('/styles', stylesRoutes);
router.use('/providers', providersRoutes);
router.use('/questionnaire', questionnaireRoutes);

module.exports = router;
