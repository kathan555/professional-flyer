 // components/pages/TechGames.jsx
import React, { useState } from 'react';
import XamlChallenge from './games/XamlChallenge';
import CSharpPuzzle from './games/CSharpPuzzle';
import TechQuiz from './games/TechQuiz';
import ArchitectureGame from './games/ArchitectureGame';
import Header from '../Header';
import '../../styles/Play.css';

const TechGame = () => {
  const [activeGame, setActiveGame] = useState('xaml');

  const games = {
    xaml: { name: 'WPF Layout Challenge', component: <XamlChallenge /> },
    csharp: { name: 'C# Code Puzzles', component: <CSharpPuzzle /> },
    quiz: { name: 'WPF vs React Quiz', component: <TechQuiz /> },
    architecture: { name: 'Architecture Decisions', component: <ArchitectureGame /> }
  };

  return (
    <div className="flyer">
      <Header title="Technical Skills Showcase" description="Interactive demonstrations of my WPF, C#, and React expertise." />
      <section id="play" className="page-section">
        <div className="play-container">
          <div className="games-tabs">
            {Object.entries(games).map(([key, game]) => (
              <button
                key={key}
                className={`tab-button ${activeGame === key ? 'active' : ''}`}
                onClick={() => setActiveGame(key)}
              >
                {game.name}
              </button>
            ))}
          </div>
          
          <div className="game-content">
            {games[activeGame].component}
          </div>

          <div className="skills-description">
            <h4>About These Demonstrations</h4>
            <p>These interactive experiences showcase my expertise across multiple technologies:</p>
            <ul>
              <li><strong>WPF/XAML:</strong> Desktop application development with modern UI patterns</li>
              <li><strong>C#:</strong> Backend logic, algorithms, and enterprise solutions</li>
              <li><strong>React:</strong> Modern web development with interactive user interfaces</li>
              <li><strong>Architecture:</strong> Making informed technology decisions based on project requirements</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechGame;