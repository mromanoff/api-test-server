var mongoose = require('mongoose');

var QuestionnaireSchema = new mongoose.Schema({
    id: {
      type: String
    },
    title: {
      type: String
    },
    description: {
      type: String
    },
    childNodes: {
      type: Array
    },
    type: {
      type: String
    },
    name: {
      type: String
    },
    selected: {
      type: Boolean
    }
  },
  {collection: 'questionnaire'}
);

module.exports = mongoose.model('Questionnaire', QuestionnaireSchema);