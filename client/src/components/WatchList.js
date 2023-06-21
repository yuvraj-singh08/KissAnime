import React, { useState, useEffect } from 'react';
import './css/WatchList.css';
import Card from './Card';

function WatchList() {
  const id = localStorage.getItem('id');
  const [list, setList] = useState([]);
  console.log(id);

  // async function handleClick(event) {
  //   event.preventDefault();
  //   const response = await fetch("http://localhost:3001/api/user/getWatchList", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ id }),
  //   });
  //   const list = await response.json();
  //   console.log(list);
  // }
  useEffect(() => {

    async function getList() {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/user/getWatchList`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });
      const data = await response.json();
      setList(data.response);
      console.log(data.response);
    }
    getList();
  }, [id])

  return (
    // JSX code here to render the watch list
    <div className="flex justify-evenly flex-wrap my-16 mx-4 ">
      {
        list.length > 0 && list.map((data) => {
          return (<Card type = "watch" id={data._id} key={data._id} title={data.name} desc={data.description} imgSrc={`/images/${data.src}`} />)
        })
      }
    </div>
  );
}

export default WatchList;
