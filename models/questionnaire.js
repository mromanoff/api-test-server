var mongoose = require('mongoose');

var QuestionnaireSchema = mongoose.Schema({
    id: {
      type: String
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    childNodes: {
      type: Array,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    name: {
      type: String
    },
    isSelected: {
      type: Boolean,
      required: true
    }
  },
  {collection: 'questionnaire'}
);

module.exports = mongoose.model('Questionnaire', QuestionnaireSchema);