var mongoose = require('mongoose');

var ContactSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  comment: String,
  updatedAt: {type: Date, default: Date.now}
});


module.exports = mongoose.model('Contact', ContactSchema);