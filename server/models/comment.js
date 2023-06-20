const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
    comment: {
        type:String,
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    anime:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Anime'
    },
    timestamp: { type: Date, default: Date.now }
});

const Comment = mongoose.model('Comment',commentSchema);

module.exports = Comment;