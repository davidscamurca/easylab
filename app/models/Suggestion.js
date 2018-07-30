const mongoose = require('../../database');

const SuggestionSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    nameSuggestion: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
},{ timestamps: true });

const Suggestion = mongoose.model('Suggestion', SuggestionSchema);

module.exports = Suggestion;