import '../css/Navbar.css'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src alt="" />
      </div>
      <div className="links">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/favourite">Favourite</Link></li>
          <li><Link to="/celebrities">Celebrities</Link></li>
          <li><Link to="/addfavourite">Add Favourite</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
