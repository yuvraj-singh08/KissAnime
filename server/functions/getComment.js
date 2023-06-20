const Comment = require('../models/comment.js');

async function getComment(req, res) {
    const animeId = req.body.animeId;
    console.log(animeId);
    try {
        const result = await Comment.find({anime: animeId});
        console.log(result);
        res.json(result);
    } catch (err) {
        console.error(err);
    }
}

module.exports = { getComment };