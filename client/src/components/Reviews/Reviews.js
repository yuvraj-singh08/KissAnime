import Comment from './components/Comment';
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import AddComment from './components/AddComment';

function Reviews() {

    const [comment, setComment] = useState([]);
    const { animeId } = useParams();
    useEffect(() => {
        const request = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                animeId: animeId,
            }),
        };

        fetch(`${process.env.REACT_APP_API_URL}/api/getComment`, request)
            .then(response => response.json())
            .then((data) => {
                setComment(data);
                console.log(data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <>
            <div className="comments-container">
            <AddComment />
                {
                    comment.length > 0 && comment.map((data) => {
                        return <Comment key={data._id} comment={data.comment} userId={data.user} />
                    })
                }
            </div>
        </>
    )
}

export default Reviews;