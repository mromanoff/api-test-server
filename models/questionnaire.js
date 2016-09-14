var mongoose = require('mongoose');

var QuestionnaireSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true
    },
    description: {
      type: String
    },
    childNodes: {
      type: Array
    },
    updatedAt: {
      type: Date,
      default: Date.now
    }
  },
  {collection: 'questionnaire'}
);


module.exports = mongoose.model('Questionnaire', QuestionnaireSchema);