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
  isFavorite: {
    type: Boolean
  },
  contact: {
    type: Object
  },
  highlights: {
    type: Array
  },
  statementSentences: {
    type: Array
  }
});


module.exports = mongoose.model('Provider', ProviderSchema);