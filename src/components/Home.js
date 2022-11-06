import '../css/Home.css'
import banner from '../images/banner.jpg'
import spinner from '../images/spinner.gif'
// import img1 from './images/img1.webp'
// import img2 from './images/img2.webp'
// import img3 from './images/img3.webp'
// import img4 from './images/img4.webp'
// import img5 from './images/img5.webp'
import React, { useState, useEffect } from 'react'

const Home = () => {
  let a=1;
  let [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    let fetchData = async () => {
      let response = await fetch("http://localhost:1000/poster")
      let resData = await response.json();
      setImages(resData)
      setLoading(false);
    }
    fetchData()
  }, [])
  return (
    <div className="home">
        <div className="banner">
          <img src={banner} alt="" />
        </div>
        <h2>Latest & Trending</h2>
      {loading && <img className='spinner' src={spinner} />}
        <div className="img-row">
       
          {images.map( data=> <img key={a++} height="270" width="200" src={data.img} alt="" />)}
        </div>
    </div>
    
  );
};

export default Home;
