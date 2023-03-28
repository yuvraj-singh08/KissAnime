import { useState, useEffect } from 'react';
import './css/WatchList.css';

function WatchList() {
  const id = sessionStorage.getItem('_id');
  const [list, setList] = useState();
  console.log(id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/user/getWatchList', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ id: id })
        });

        const data = await response.json();
        console.log("Data is here");
        console.log(data.response);
        setList(data.response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();

    return () => {
      // cleanup function
      // handle any side effects here when the component unmounts
    };
  }, [id]);

  return (
    // JSX code here to render the watch list
    <div>{list}</div>
  );
}

export default WatchList;
