const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    email: {
        type:String,
        required: true
    },
    password: {
        type:String,
        required: true
    },
    imgSource: {
        type:String,
        required: false
    },
    watchList:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Anime',
        required: false
    }]
});

const user = mongoose.model('user', userSchema);

module.exports = user;