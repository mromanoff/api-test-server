var mongoose = require('mongoose');

var StyleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  values: {
    type: Array,
    required: true
  }
});


module.exports = mongoose.model('Style', StyleSchema);