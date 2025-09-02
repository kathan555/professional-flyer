// components/pages/games/ArchitectureGame.jsx
import React, { useState } from 'react';
import './ArchitectureGame.css';

const ArchitectureGame = () => {
  const [scenario, setScenario] = useState(0);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState('');

  const scenarios = [
    {
      description: "You need to build a cross-platform desktop application with modern UI. Which technology stack?",
      options: [
        { text: "WPF + .NET", correct: false, reason: "WPF is Windows-only, not cross-platform" },
        { text: "React + Electron", correct: true, reason: "Perfect for cross-platform desktop apps with web tech" },
        { text: "Pure C# Console App", correct: false, reason: "Not suitable for modern UI applications" }
      ]
    },
    {
      description: "Enterprise Windows desktop application with complex data binding needs.",
      options: [
        { text: "React", correct: false, reason: "Possible but not ideal for complex Windows-specific apps" },
        { text: "WPF with MVVM", correct: true, reason: "Excellent for enterprise Windows apps with complex data binding" },
        { text: "HTML + CSS", correct: false, reason: "Not suitable for native Windows applications" }
      ]
    }
  ];

  const handleChoice = (choiceIndex) => {
    const current = scenarios[scenario];
    const choice = current.options[choiceIndex];
    
    setFeedback(choice.reason);
    
    if (choice.correct) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (scenario + 1 < scenarios.length) {
        setScenario(scenario + 1);
        setFeedback('');
      }
    }, 2000);
  };

  return (
    <div className="architecture-game">
      <h3>Architecture Decision Simulator</h3>
      <div className="game-info">
        <span>Scenario: {scenario + 1}/{scenarios.length}</span>
        <span>Score: {score}</span>
      </div>

      <div className="scenario">
        <p>{scenarios[scenario].description}</p>
      </div>

      <div className="architecture-options">
        {scenarios[scenario].options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleChoice(index)}
            className={`arch-option ${feedback && option.correct ? 'correct' : ''} ${feedback && !option.correct ? 'incorrect' : ''}`}
          >
            {option.text}
          </button>
        ))}
      </div>

      {feedback && (
        <div className="architecture-feedback">
          <p>{feedback}</p>
        </div>
      )}
    </div>
  );
};

export default ArchitectureGame;