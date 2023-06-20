const user = require('../models/user');

async function getUser(req, res) {
    const { _id } = req.body;
    try {
        const result = await user.find({ _id: _id }, { _id: 0, name: 1, imgSource: 1 });
        console.log("Resulted user: " + result);
        res.json(result);
    } catch (err) {
        console.error(err);
    }
};

module.exports = { getUser };