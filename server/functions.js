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
    
    let temp = await getAnime({name:Anime},{_id : 1})
    const id = temp[0]._id;
    console.log("Abdul");
    console.log(id);

    const character = new Character({
        name:name,
        description:description,
        src: source,
        anime:id
    });

    try {
        const savedCharacter = await character.save();
        console.log(`Saved character: ${savedCharacter}`);
    }
    catch (err) {
        console.log(err);
    }   
}

async function getAnime(query,projection) {

    try {
        const result = await Anime.find(query,projection);
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

async function addUser(name,email,password,imgSource){
    const user = new User({name,email,password,imgSource});
    try {
        const savedUser = await user.save();
        console.log(`Saved user: ${savedUser}`);
    }catch(err){
        console.error(err);
    }
}

async function isRegistered(email,password){
    try{
        const result = await User.find({email: email,password: password});
        if(result.length > 0){
            return true;
        }
        else{
            return false;
        }
    } catch(err){
        console.error(err);
    }
}

module.exports = {
    addAnime, getAnime, getAllCharactersByAnimeId, addCharacter, addUser, isRegistered
};

