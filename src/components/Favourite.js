import React, { useEffect } from 'react'
import { useState } from 'react';
import '../css/Favourite.css'
import FavouriteLogic from './FavouriteLogic';

function Favourite() {
  let [movies, setData] = useState([]);
  let handleDelete = (id) => {
    setData(movies.filter(x => x.id !== id))
  }

  useEffect(() => {
    let fetchData = async () => {
      let response = await fetch("http://localhost:1000/database")
      let resData = await response.json();
      setData(resData)
    }
    fetchData()
  }, [])
  return (
    <div className='favourite'>
      <FavouriteLogic data={movies} title="Frequently Asked & Ratings" dataButton={handleDelete} />
      <FavouriteLogic data={movies.filter((x) => x.rating > 3.8)} title="High Rating" dataButton={handleDelete} />
      <FavouriteLogic data={movies.filter((x) => x.lang === "Hindi")} title="Hindi Lang" dataButton={handleDelete} />
    </div>
  )
}

export default Favourite