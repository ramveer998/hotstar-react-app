import { Link } from 'react-router-dom';
import '../css/Categories.css'
const Categories = () => {
    return ( <div className="categories">
        
        <ul>
            <li><Link to="/">Categories</Link></li>
            <li><Link to="/movies">Movies</Link></li>
            <li><Link to="/sports">Sports</Link></li>
            <li><Link to="/tvshows">TV Shows</Link></li>
            <li><Link to="/music">Music</Link></li>
            <li><Link to="/disney">Disney+</Link></li>
            <li><Link to="/kids"><img src="https://www.hotstar.com/assets/4aa70ede8904e16b7630300c09219c8e.svg" alt="" /></Link></li>
        </ul>
    </div> );
}
 
export default Categories;