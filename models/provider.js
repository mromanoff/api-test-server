var mongoose = require('mongoose');

var ProviderSchema = new mongoose.Schema({
  id: {
    type: String
  },
  name: {
    type: String
  },
  age: {
    type: Number
  },
  gender: {
    type: String
  },
  photoUrl: {
    type: String
  },
  summarySentences: {
    type: Array
  },
  providerStatement: {
    type: Array
  }
});


module.exports = mongoose.model('Provider', ProviderSchema);