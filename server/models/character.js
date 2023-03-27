const mongoose = require('mongoose');

const CharacterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    src: {
        type: String,
        required: true,
    },
    anime: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Anime'
    }
});

const Character = mongoose.model('Character',CharacterSchema);

module.exports = Character;