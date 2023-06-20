const Comment = require('../models/comment');

async function addComment(req, res) {
    const { comment, anime, user } = req.body;
    const comm = new Comment({
        comment: comment,
        anime: anime,
        user: user
    });

    try {
        const newComment = await comm.save();
        console.log("Saved comment: " + newComment);
        res.json({status:'success'});
    } catch (err) {
        console.error(err);
    }
}

module.exports = {addComment};