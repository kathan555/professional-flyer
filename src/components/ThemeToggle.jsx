// components/ThemeToggle.jsx
import { useEffect, useState } from 'react';
import '../styles/indexStyles.css';

const ThemeToggle = () => {
  const [isLightTheme, setIsLightTheme] = useState(false);

  useEffect(() => {
    // Initialize theme from localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      document.body.setAttribute('data-theme', 'light');
      setIsLightTheme(true);
    }
  }, []);

  const toggleTheme = () => {
    if (isLightTheme) {
      // Switch to dark theme
      document.body.removeAttribute('data-theme');
      localStorage.removeItem('theme');
      setIsLightTheme(false);
    } else {
      // Switch to light theme
      document.body.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
      setIsLightTheme(true);
    }
  };

  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      <span id="theme-icon">{isLightTheme ? '☀️' : '🌙'}</span>
      <span id="theme-text">{isLightTheme ? 'Dark' : 'Light'}</span>
    </button>
  );
};

export default ThemeToggle;