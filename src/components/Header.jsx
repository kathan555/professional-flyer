// components/Header.jsx
import { useEffect } from 'react';
import '../styles/indexStyles.css';

const Header = ({ title, description }) => {
  const createConnections = () => {
    const container = document.getElementById('connections');
    if (!container) return;
    
    const numConnections = 20;
    
    for (let i = 0; i < numConnections; i++) {
      const connection = document.createElement('div');
      connection.className = 'connection';
      
      // Random positioning
      const top = Math.random() * 100;
      const left = Math.random() * 100;
      const rotation = Math.random() * 360;
      const delay = Math.random() * 12;
      
      connection.style.top = `${top}%`;
      connection.style.left = `${left}%`;
      connection.style.transform = `rotate(${rotation}deg)`;
      connection.style.animationDelay = `-${delay}s`;
      
      container.appendChild(connection);
    }
  };

  const createBinaryRain = () => {
    const container = document.getElementById('binary-rain');
    if (!container) return;
    
    // Clear previous content
    container.innerHTML = '';
    
    const columnCount = Math.floor(window.innerWidth / 20);
    
    for (let i = 0; i < columnCount; i++) {
      const column = document.createElement('div');
      column.className = 'binary-column';
      column.style.left = (i * 20) + 'px';
      column.style.animationDuration = (Math.random() * 5 + 5) + 's';
      column.style.animationDelay = (Math.random() * 5) + 's';
      
      // Add random binary digits
      let binaryString = '';
      for (let j = 0; j < 30; j++) {
        binaryString += Math.random() > 0.5 ? '1' : '0';
        if (j % 3 === 0) binaryString += '<br>';
      }
      
      column.innerHTML = binaryString;
      container.appendChild(column);
    }
  };

  useEffect(() => {
    createConnections();
    createBinaryRain();
    
    const handleResize = () => {
      createBinaryRain();
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="header">       
      <div className="wpf-grid"></div>
      
      {/* Binary rain effect */}
      <div id="binary-rain" className="binary-rain"></div>
      
      {/* Code snippets container */}
      <div id="code-snippets"></div>
      
      {/* Connection nodes */}
      <div className="node" style={{ top: '20%', left: '30%' }}></div>
      <div className="node" style={{ top: '60%', right: '25%' }}></div>
      <div className="node" style={{ bottom: '30%', left: '20%' }}></div>
      
      {/* Tech icons */}
      <div className="net-icon" style={{ top: '15%', right: '50%' }}>
        <span className="material-symbols-outlined">data_object</span>
      </div>
      <div className="net-icon" style={{ top: '50%', left: '15%' }}>
        <span className="material-symbols-outlined">code</span>
      </div>
      <div className="net-icon" style={{ bottom: '10%', right: '20%' }}>
        <span className="material-symbols-outlined">terminal</span>
      </div>
      
      {/* Connection lines */}
      <div id="connections"></div>
      
      <div className="header-content">
        <h1 className="name">{ title }</h1>
        <p className="title">{ description }</p>
      </div>      
    </header>
  );
};

export default Header;