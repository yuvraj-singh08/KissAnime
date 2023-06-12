import React, { useState, useEffect } from 'react';
import Card from './Card';
import CharCard from './CharCard';
import AnimeInfo from './AnimeInfo';
import { useParams } from 'react-router-dom';

function AnimePage(props) {
  const { animeId } = useParams();

  const [characters, setCharacters] = useState([]);
  const [anime, setAnime] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/api/anime/${animeId}`)
      .then((res => res.json()))
      .then((data) => {
        setAnime(data[0]);
      })
      .catch((err) => console.error(err));
  }, [animeId]);

  useEffect(() => {
    fetch(`http://localhost:3001/api/anime/${animeId}/characters`)
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data);
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, [animeId]);

  return (
    <>
      <AnimeInfo name = {anime.name} description = {anime.para} imageSrc = {`/images/${anime.src}`}  />
      <div className="flex justify-evenly flex-wrap my-16 mx-4 ">
        {characters.length>0 && characters.map((character) => (
          <CharCard
            key={character._id}
            heading={character.name}
            desc={character.description}
            src={`/images/${character.src}`}
          />
        ))}
      </div>
    </>
  );
}

export default AnimePage;
