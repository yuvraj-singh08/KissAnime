const mongoose = require('mongoose');

const CommentSchema = mongoose.Schema({
    comment: {
        type:String,
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:true
    },
    anime:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'anime',
        required:true   
    },
    timestamp: { type: Date, default: Date.now }
});

const Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;