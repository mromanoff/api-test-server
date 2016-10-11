var mongoose = require('mongoose');

var InsuranceDetailsSchema = new mongoose.Schema({
    insuranceCarrier: {
      type: String
    },
    firstName: {
      type: String
    },
    lastName: {
      type: String
    },
    dob: {
      type: String
    },
    gender: {
      type: String
    },
    address: {
      type: String
    },
    city: {
      type: String
    },
    state: {
      type: String
    },
    zip: {
      type: String
    }
  },
  {collection: 'insuranceDetails'}
);


module.exports = mongoose.model('InsuranceDetails', InsuranceDetailsSchema);