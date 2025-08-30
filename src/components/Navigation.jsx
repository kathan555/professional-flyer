// components/Navigation.jsx
import '../styles/indexStyles.css';

const Navigation = () => {
  return (
    <footer id="bottom-nav">
      <nav>
        <a href="#summary" className="nav-item">
          <span className="material-symbols-outlined">person</span>
          <span className="nav-label">Summary</span>
        </a>
        <a href="#skills" className="nav-item">
          <span className="material-symbols-outlined">code</span>
          <span className="nav-label">Skills</span>
        </a>
        <a href="#experience" className="nav-item">
          <span className="material-symbols-outlined">work</span>
          <span className="nav-label">Experience</span>
        </a>
        <a href="#projects" className="nav-item">
          <span className="material-symbols-outlined">folder</span>
          <span className="nav-label">Projects</span>
        </a>
      </nav>
    </footer>
  );
};

export default Navigation;