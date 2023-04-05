const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;
const Character = require('./models/character');
const Anime = require('./models/anime');
const User = require('./models/user');

async function addAnime(name, description, src, para) {

    const anime = new Anime({
        name,
        description,
        src,
        para,
        characters: []
    });

    try {
        const savedAnime = await anime.save();
        console.log(`Saved anime: ${savedAnime}`);
    } catch (err) {
        console.log(err);
    }
}

async function addCharacter(name, description, source, Anime) {

    let temp = await getAnime({ name: Anime }, { _id: 1 })
    const id = temp[0]._id;
    console.log("Abdul");
    console.log(id);

    const character = new Character({
        name: name,
        description: description,
        src: source,
        anime: id
    });

    try {
        const savedCharacter = await character.save();
        console.log(`Saved character: ${savedCharacter}`);
    }
    catch (err) {
        console.log(err);
    }
}

async function getAnime(query, projection) {

    try {
        const result = await Anime.find(query, projection);
        console.log(result);
        return result;
    }
    catch (err) {
        console.error(err);
    }
}

const getAllCharactersByAnimeId = async (req, res) => {
    try {
        const animeId = req.params.animeId;
        const characters = await Character.find({ anime: animeId });
        res.json(characters);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
};

async function addUser(name, email, password, imgSource) {
    const user = new User({ name, email, password, imgSource });
    try {
        const savedUser = await user.save();
        console.log(`Saved user: ${savedUser}`);
    } catch (err) {
        console.error(err);
    }
}

async function isRegistered(email, password) {
    try {
        const result = await User.find({ email: email, password: password }, { _id: 1 });
        if (result.length > 0) {
            return result;
        }
        else {
            return false;
        }
    } catch (err) {
        console.error(err);
    }
}

async function addToWatchList(id, anime) {
    console.log(id, anime);
    try {
        User.findById(id)
            .then(user => {
                console.log("then hora hai");
                if (!user) {
                    // handle error: user not found
                    console.log("Not user");
                    return;
                }

                user.watchList.push(anime); 
                console.log("push ho gaya");// add the anime ID to the user's watchList array

                user.save() // save the updated user object
                    .then(updatedUser => {
                        console.log("Success");
                        // handle success: user object updated successfully
                    })
                    .catch(error => {
                        console.log("Faliure");
                        console.error(error);
                        // handle error: failed to save updated user object
                    });
            })
            .catch(error => {
                console.log("Maa chud gayi hai");
                // handle error: failed to find user by ID
            });
        return true;
    } catch (err) {
        console.error(err);
    }
}

async function getWatchList(id) {
    const projection = { watchList: 1, _id: 0 };
    try {
        const response = await User.find({ _id: id })
            .populate('watchList');//Getting error with projection
        console.log("Here is response");
        console.log(response);
        return response[0].watchList;
    } catch (err) {
        console.error(err);
    }
}

async function addComment(comment,anime,user){
    
}

module.exports = {
    addAnime, getAnime, getAllCharactersByAnimeId, addCharacter, addUser, isRegistered, addToWatchList, getWatchList
};

