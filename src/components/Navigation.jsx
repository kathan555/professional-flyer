// components/Navigation.jsx
import '../styles/indexStyles.css';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();

  // Determine if we're on the home page (either "/" or exactly "/")
  const isHomePage = location.pathname === '/' || location.pathname === '';
  
  return (
    <footer id="bottom-nav">
      <nav>
       <Link to="/" className={`nav-item ${isHomePage ? 'active' : ''}`}>
          <span className="material-symbols-outlined">home</span>
          <span className="nav-label">Home</span>
        </Link>
        <Link to="/techGame" className={`nav-item ${location.pathname === '/techGame' ? 'active' : ''}`}>
          <span className="material-symbols-outlined">sports_esports</span>
          <span className="nav-label">Tech Game</span>
        </Link>
        <Link to="/calculate" className={`nav-item ${location.pathname === '/calculate' ? 'active' : ''}`}>
          <span className="material-symbols-outlined">calculate</span>
          <span className="nav-label">Calculate</span>
        </Link>
        <Link to="/contactus" className={`nav-item ${location.pathname === '/contactus' ? 'active' : ''}`}>
          <span className="material-symbols-outlined">contact_page</span>
          <span className="nav-label">ContactUs</span>
        </Link>
      </nav>
    </footer>
  );
};

export default Navigation;