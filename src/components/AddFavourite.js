import React from 'react'
import '../css/AddFavourite.css'
import homepic from '../images/home-pic.png'

const AddFavourite = () => {
   
    return (
        <div className='container-add'>
            <div className="col-1-add">
                <img src={homepic} alt="" />
            </div>
            <div className="col-2-add">
                <h1>Add Favourite</h1> <br />
                <form action="">
                    <label htmlFor="title">
                        <br /> Title <br /><br />
                        <input placeholder='Title' type="text" name="title" id="title" />
                    </label>
                    <br />
                    <label for="genre">
                        <br />  Genere  <br /><br />
                        <input placeholder='Genere' type="text" name="genre" id="genre" />
                    </label> <br />
                    <label for="rating">
                        <br /> Rating <br /><br />
                        <input placeholder='Rating' type="text" name="rating" id="rating" />
                    </label> <br />
                    <label for="language">
                        <br /> Languague <br /><br />
                        <input placeholder='Language' type="text" name="lang" id="language" />
                    </label> <br /><br />
                    <button className='btn-add-fav' style={{ marginRight: "15px" }} >Submmit</button>
                    <button className='btn-add-fav'>Reset</button>
                </form>

            </div>
        </div>
    )
}

export default AddFavourite