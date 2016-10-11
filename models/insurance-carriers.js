var mongoose = require('mongoose');

var InsuranceCarriersSchema = new mongoose.Schema({
    id: {
      type: String
    },
    name: {
      type: String
    }
  },
  {collection: 'insuranceCarriers'}
);


module.exports = mongoose.model('InsuranceCarrier', InsuranceCarriersSchema);