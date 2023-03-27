import React from 'react';
import Card from './components/Card';
import { useEffect,useState } from 'react';
import './App.css'

function App(){
    const [animeList, setAnimeList] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/api/allAnime')
            .then(res => res.json())
            .then(data => {
                const animeList = data.map((anime, index) => ({ ...anime, key: index }));
                setAnimeList(animeList);
            })
            .catch(err => console.log(err));

    }, []);
    
    return(
        <>
             <div className="flex justify-evenly flex-wrap my-16 mx-4 ">
            {
                animeList.length>0 && animeList.map((data)=>{
                   return( <Card id = {data._id} key = {data._id} title={data.name} desc = {data.description} imgSrc = {`/images/${data.src}`} />)
                })
            }
            </div>
            
        </>
    );
}

export default App;