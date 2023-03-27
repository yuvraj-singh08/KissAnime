import React from 'react';
import './css/AnimeInfo.css';

function AnimeInfo(props) {
  const { name, description, imageSrc } = props;

  return (
    <div className="anime-info-container">
      <img className="anime-image" src={imageSrc} alt={`${name} image`} />
      <div className="anime-text">
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default AnimeInfo;
