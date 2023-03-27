const mongoose = require('mongoose');

const AnimeSchema = new mongoose.Schema({
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
    para: {
        type: String,
        required: true,
    },
    characters: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Character'
    }]
});



const Anime = mongoose.model('Anime', AnimeSchema);

module.exports = Anime;