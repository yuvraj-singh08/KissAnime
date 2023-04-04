import React from "react";
import "./Card.css"
import { Link } from "react-router-dom";

function Card(props) {
  const id = localStorage.getItem('id');
  const anime = props.id
  async function addToWatchList(e) {
    e.preventDefault();
    const response = await fetch("http://localhost:3001/api/user/addWatchList", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id, anime: anime })
    });
    const data = await response.json();
    console.log(data);
  }
  // console.log(props)
  return (
    <div className="flex flex-wrap my-16 mx-8">
      <div className="card">
        <div className="circle"></div>
        <div className="content">
          <h1>{props.title}</h1>
          <p>{props.desc} </p>
          {
            (props.type === 'watch') &&
            <>
              <Link to={`/anime/${props.id}`}>
                READ MORE
              </Link>
            </>
          }
          {(props.type === "anime") &&
            <>
              <Link to={`/anime/${props.id}`}>
                READ MORE
              </Link>
              <button className="bg-white  text-black rounded-md px-2 py-2 m-2" onClick={addToWatchList}>+WatchList</button>
            </>
          }


        </div>
        <img src={props.imgSrc} alt="" />
      </div>

    </div>
  );
}

export default Card;
