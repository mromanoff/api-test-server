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
router.use('/styles/descriptors', stylesRoutes);
router.use('/styles/providers', providersRoutes);
router.use('/providers', providersRoutes);
router.use('/issues/questionnaire', questionnaireRoutes);

module.exports = router;
