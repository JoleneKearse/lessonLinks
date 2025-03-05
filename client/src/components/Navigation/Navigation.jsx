import { Link, useLocation } from 'react-router';
import './Navigation.css';
import logoImage from '../../assets/LL_logo.png'; // Import the image

function Navigation() {
  const location = useLocation();
  
  return (
    <header>
        <nav>
          <Link to="/" className="logo">
            <img src={logoImage} alt="LessonLinks Logo" className="logo-img" /> 
            LessonLinks
          </Link>
          <ul className="nav-links">
            <li><Link to="/request">Post a Request</Link></li>
            <li><Link to="/browse-resources">Browse Resources</Link></li>
            <li><Link to="/browse-requests">See Requests</Link></li>
          </ul>
        </nav>
    </header>
  );
}

export default Navigation; 