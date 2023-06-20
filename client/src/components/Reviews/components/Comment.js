import { useEffect, useState } from 'react';
import './css/comment.css';

function Comment(props) {
    const [user, setUser] = useState();

    useEffect(() => {
        async function getComments() {
            const request = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    _id: '64734c0515629a95a167bd83'
                }),
            };

            await fetch("http://localhost:3001/api/getUser", request)
                .then(response => response.json())
                .then((data) => {
                    setUser(data);
                    console.log(data);
                })
                .catch((err) => {
                    console.error(err);
                });
        }
        getComments();
    }, []);

    return <>
        {user !== undefined ? <div className="comment">
            <div class="circle-container">
                <img src={`/images/${user[0].imgSource}`} alt="Image" class="circle-image" />
            </div>
            <div>
                <div className="comment-header">
                    <strong className="comment-author">{user[0].name}</strong>
                    <span className="comment-timestamp">2 hours ago</span>
                </div>
                <div className="comment-content">
                    {props.comment}
                </div>
            </div>

        </div> : <div></div>}
        {/* <div class="comments-container">
            

            <div class="comment">
                <div class="comment-header">
                    <span class="comment-author">Jane Smith</span>
                    <span class="comment-timestamp">1 day ago</span>
                </div>
                <div class="comment-content">
                    Another comment here.
                </div>
            </div>
        </div> */}

    </>;
}

export default Comment;