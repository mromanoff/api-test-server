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
  highlights: {
    type: Array
  },
  statementSentences: {
    type: Array
  }
});


module.exports = mongoose.model('Provider', ProviderSchema);