import React, { useState, useEffect } from 'react';

function AddCharacterForm() {
    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [source, setSource] = useState();
    const [anime, setAnime] = useState();

    function handleClick(event) {
        event.preventDefault();
        const data = {
            name: name,
            description: description,
            source: source,
            anime: anime
        }
        
        fetch('http://localhost:3001/characters/add',{
            method: 'POST',
            headers: { 'Content-Type':'application/json' },
            body: JSON.stringify(data)
        })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((error) => console.error(error));

        setName('');
        setDescription('');
        setSource('');
        setAnime('');

    }

    return (
        <div className="form-container bg-gray-100 rounded-lg p-6">
            <form>
                <input className='form-input my-2 p-2 border rounded-lg' placeholder='Name' id='name' value={name} onChange = {(e) => {setName(e.target.value)}} />
                <input className='form-input my-2 p-2 border rounded-lg' placeholder='Description' id='description' value={description} onChange = {(e) => {setDescription(e.target.value)}} />
                <input className='form-input my-2 p-2 border rounded-lg' placeholder='Source' id='source' value={source} onChange = {(e) => {setSource(e.target.value)}} />
                <input className='form-input my-2 p-2 border rounded-lg' placeholder='Anime' id='anime' value={anime} onChange = {(e) => {setAnime(e.target.value)}}/>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-2" type='button' onClick={handleClick}>Submit</button>
            </form>
        </div>
    );
}

export default AddCharacterForm;
