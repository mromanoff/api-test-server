var mongoose = require('mongoose');

var ProviderSchema = new mongoose.Schema({
  firstName: String,
  middleName: String,
  lastName: String,
  age: Number,
  type: String,
  url: String,
  styles: Array,
  updatedAt: {
    type: Date,
    default: Date.now
  }
});


module.exports = mongoose.model('Provider', ProviderSchema);