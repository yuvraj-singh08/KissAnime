import React from 'react';
import './css/CharCard.css';

function CharCard(props) {
return (
    <div className="flip-card mt-3 mb-4">
        <div className="flip-card-inner">
          <div  className="flip-card-front ">
            <img  src={props.src} />
          </div>
          <div className="flip-card-back">
          <h1 className='text-3xl'>{props.heading}</h1>
            <br />
            <p>{props.desc} </p>
           
          </div>
        </div>
    </div>
)
}
export default CharCard;