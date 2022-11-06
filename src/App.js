import "./css/App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Favourite from "./components/Favourite";
import Celebrities from "./components/Celebrities";
import AddFavourite from "./components/AddFavourite";
import Footer from "./components/Footer";
import Categories from "./components/Categories";
import Movies from "./components/Movies";
import Sports from "./components/Sports";
import TvShows from "./components/TvShows";
import Music from "./components/Music";
import Disney from "./components/Disney";
import Kids from "./components/Kids";
import NotFound from "./components/404";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<div className="homeComponent">
            <Categories />
            <div className="main-home">
              <Home />
            </div>
          </div>} />
          <Route path="/movies" element={<div className="homeComponent">
            <Categories />
            <div className="main-home">
              <Movies />
            </div>
          </div>} />

          <Route path="/sports" element={<div className="homeComponent">
            <Categories />
            <div>
              <Sports />
            </div>
          </div>} />
          <Route path="/tvshows" element={<div className="homeComponent">
            <Categories />
            <div className="main-home">
              <TvShows />
            </div>
          </div>} />
          <Route path="/music" element={<div className="homeComponent">
            <Categories />
            <div>
              <Music />
            </div>
          </div>} />
          <Route path="/disney" element={<div className="homeComponent">
            <Categories />
            <div>
              <Disney />
            </div>
          </div>} />
          <Route path="/kids" element={<div className="homeComponent">
            <Categories />
            <div>
              <Kids />
            </div>
          </div>} />
          <Route path="/favourite" element={<div className="homeComponent">
            <Categories />
            <div className="main-home">
              <Favourite />
            </div>
          </div>} />
          <Route path="/addfavourite" element={<div className="homeComponent">
            <Categories />
            <div className="main-home">
              <AddFavourite />
            </div>
          </div>} />
          <Route path="/celebrities" element={<div className="homeComponent">
            <Categories />
            <div className="main-home">
              <Celebrities />
            </div>
          </div>} />
          <Route path="*" element={<div className="homeComponent">
            <Categories />
            <div >
              <NotFound />
            </div>
          </div>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
