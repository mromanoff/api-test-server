var mongoose = require('mongoose');

var InsuranceSchema = new mongoose.Schema({
    id: {
      type: String
    },
    name: {
      type: String
    }
  },
  {collection: 'insurance'}
);


module.exports = mongoose.model('Insurance', InsuranceSchema);