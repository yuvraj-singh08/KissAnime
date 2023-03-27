import React, { useState } from 'react';

function AddAnimeForm() {
    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [source, setSource] = useState();
    const [para, setPara] = useState();

    function handleClick(event) {
        event.preventDefault();
        const data = {
            name: name,
            description: description,
            source: source,
            para: para
        }
        
        fetch('http://localhost:3001/anime/add',{
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
        setPara('');

    }

    return (
        <div className="form-container">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <input className='form-input shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='Name' id='name' value={name} onChange = {(e) => {setName(e.target.value)}} />
                </div>
                <div className="mb-4">
                    <input className='form-input shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='Description' id='description' value={description} onChange = {(e) => {setDescription(e.target.value)}} />
                </div>
                <div className="mb-4">
                    <input className='form-input shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='Source' id='source' value={source} onChange = {(e) => {setSource(e.target.value)}} />
                </div>
                <div className="mb-4">
                    <textarea className='form-input shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='Paragraph' id='para' value={para} onChange = {(e) => {setPara(e.target.value)}}/>
                </div>
                <div className="flex items-center justify-between">
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type='button' onClick={handleClick}>Submit</button>
                </div>
            </form>
        </div>
    );
}

export default AddAnimeForm;
