var mongoose = require('mongoose');

var StyleSchema = new mongoose.Schema({
    name: String,
    description: String,
    updatedAt: {type: Date, default: Date.now}
});


module.exports = mongoose.model('Style', StyleSchema);