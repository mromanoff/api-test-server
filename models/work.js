var mongoose = require('mongoose');

var WorkSchema = new mongoose.Schema({
  name: String,
  visible: Boolean,
  category: String,
  url: String,
  image: Boolean,
  description: String,
  information: String,
  client: Array,
  updatedAt: {type: Date, default: Date.now}
});


module.exports = mongoose.model('Work', WorkSchema);