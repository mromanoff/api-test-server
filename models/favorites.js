var mongoose = require('mongoose');

var FavoriteSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  favorite: {
    type: Boolean,
    required: true,
    default: false
  }
});

module.exports = mongoose.model('Favorite', FavoriteSchema);