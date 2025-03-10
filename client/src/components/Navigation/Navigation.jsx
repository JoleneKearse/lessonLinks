import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import './Navigation.css';

function Navigation() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  // Close mobile menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const toggleMenu = () => {
    console.log("Toggle menu clicked, current state:", menuOpen);
    setMenuOpen(!menuOpen);
  };

  // Helper function to check if link is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header>
      <nav>
        <Link to="/" className="logo">
          <img
            src="/assets/LL_logo.png"
            alt="LessonLinks Logo"
            className="logo-img"
          />
          LessonLinks
        </Link>
        
        {/* Hamburger button for mobile */}
        <button 
          className={`hamburger ${menuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
        
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li>
            <Link 
              to="/request" 
              className={`bordered-link ${isActive('/request') ? 'active-link' : ''}`}
            >
              Post a Request
            </Link>
          </li>
          <li>
            <Link 
              to="/browse-resources" 
              className={isActive('/browse-resources') ? 'active-link' : ''}
            >
              Browse Resources
            </Link>
          </li>
          <li>
            <Link 
              to="/browse-requests" 
              className={isActive('/browse-requests') ? 'active-link' : ''}
            >
              See Requests
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
