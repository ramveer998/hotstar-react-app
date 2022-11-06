import React from 'react'

function FavouriteLogic(props) {
  let movies = props.data
  let title = props.title
  let deleteButton = props.dataButton
  return (
    <div className="favourite">
        <h1>{title}</h1>
    <div className="grid-container">
      {movies.map((value) => (
        <div className="grid-item">
        <div className="card">
          <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="Avatar" style={{ width: "100%" }} />
          <div className="container">
            <h4><b>{value.title}</b></h4>
            <span>{value.genre}</span> <br />
              <span>{value.lang}</span> <br />
            <span>{value.rating}</span>
            <div className='favorite-btn'>
              <button className="favourite-edit-btn">Edit</button>
              <button className="favourite-delete-btn" onClick={() => { deleteButton(value.id) }} >Delete</button>
            </div>
          </div>
        </div>
      </div>
      ))}
    </div>
    </div>
    
      
   
  )
}

export default FavouriteLogic