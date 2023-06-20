import { useState, useEffect } from 'react';
import './css/AddComment.css';
import { useParams } from 'react-router-dom';

function AddComment() {
    const [comment, setComment] = useState('');
    const [user, setUser] = useState();
    const { animeId } = useParams();

    function addComment(e) {
        e.preventDefault();
        const reqData = {
            comment: comment,
            anime: animeId,
            user: localStorage.getItem('id')
        }
        const request = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(reqData),
        }
        fetch('http://localhost:3001/api/addComment',request)
        .then(response => response.json())
        .then((data) => {
            console.log(data);
        })
        .catch((err) => {
            console.error(err);
        });
    }

    function handleChange(e) {
        setComment(e.target.value);
    }
    return <>
        <div className="comment">
            <div class="circle-container">
                <img src={`/images/yuvraj.jpg`} alt="Image" class="circle-image" />
            </div>
            <div className='input-container'>
                <input type='text' placeholder='Add a comment...' value={comment} onChange={handleChange} className='comment-input'></input>
            </div>
            <div className='button-container'>
                <button>Cancel</button>
                <button type='button' onClick={addComment}>Comment</button>
            </div>

        </div> : <div></div>
    </>
}

export default AddComment;