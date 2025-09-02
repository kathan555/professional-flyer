// components/pages/games/XamlChallenge.jsx
import React, { useState } from 'react';
import './XamlChallenge.css';

const XamlChallenge = () => {
  const [controls, setControls] = useState([]);
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);

  const wpfControls = [
    { type: 'Button', content: 'Click Me', xaml: '<Button Content="Click Me" />' },
    { type: 'TextBox', content: 'Input here', xaml: '<TextBox Text="Input here" />' },
    { type: 'Label', content: 'Description', xaml: '<Label Content="Description" />' },
    { type: 'ComboBox', content: 'Options', xaml: '<ComboBox><ComboBoxItem Content="Option 1"/></ComboBox>' },
    { type: 'CheckBox', content: 'Check me', xaml: '<CheckBox Content="Check me" />' }
  ];

  const challenges = [
    {
      description: 'Create a simple form with a Label, TextBox, and Button',
      targetXaml: `
        <StackPanel>
            <Label Content="Name:" />
            <TextBox />
            <Button Content="Submit" />
        </StackPanel>
      `,
      solution: ['Label', 'TextBox', 'Button']
    }
  ];

  const [currentChallenge, setCurrentChallenge] = useState(0);

  const addControl = (controlType) => {
    const control = wpfControls.find(c => c.type === controlType);
    setControls([...controls, { ...control, id: Date.now() }]);
  };

  const checkSolution = () => {
    const current = challenges[currentChallenge];
    const userTypes = controls.map(c => c.type);
    
    if (JSON.stringify(userTypes) === JSON.stringify(current.solution)) {
      setScore(score + 100);
      setLevel(level + 1);
      setControls([]);
      setCurrentChallenge((currentChallenge + 1) % challenges.length);
    }
  };

  const generateXaml = () => {
    return `<StackPanel>\n  ${controls.map(c => c.xaml).join('\n  ')}\n</StackPanel>`;
  };

  return (
    <div className="xaml-game">
      <h3>WPF Layout Challenge</h3>
      <div className="game-info">
        <span>Level: {level}</span>
        <span>Score: {score}</span>
      </div>
      
      <div className="challenge-desc">
        <p>{challenges[currentChallenge].description}</p>
      </div>

      <div className="game-container">
        <div className="controls-palette">
          <h4>WPF Controls</h4>
          {wpfControls.map(control => (
            <div
              key={control.type}
              className="control-item"
              onClick={() => addControl(control.type)}
            >
              {control.type}
            </div>
          ))}
        </div>

        <div className="design-surface">
          <h4>Design Surface</h4>
          <div className="xaml-preview">
            {controls.length === 0 ? (
              <p>Drag controls here or click to add</p>
            ) : (
              controls.map(control => (
                <div key={control.id} className="wpf-control">
                  {control.type}: {control.content}
                </div>
              ))
            )}
          </div>
        </div>

        <div className="xaml-output">
          <h4>Generated XAML</h4>
          <pre>{generateXaml()}</pre>
        </div>
      </div>

      <button onClick={checkSolution} className="game-button">Check Solution</button>
      <button onClick={() => setControls([])} className="game-button-secondary">Clear All</button>
    </div>
  );
};

export default XamlChallenge;