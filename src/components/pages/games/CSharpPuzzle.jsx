// components/pages/games/CSharpPuzzle.jsx
import React, { useState } from 'react';
import './CSharpPuzzle.css';

const CSharpPuzzle = () => {
  const [userCode, setUserCode] = useState('');
  const [output, setOutput] = useState('');
  const [score, setScore] = useState(0);
  const [currentPuzzle, setCurrentPuzzle] = useState(0);

  const puzzles = [
    {
      title: "Array Sum Challenge",
      description: "Complete the method to calculate the sum of an array of integers.",
      template: `using System;

public class Calculator
{
    public static int SumArray(int[] numbers)
    {
        // Your code here
        return 0;
    }
}`,
      testCases: [
        { input: "[1, 2, 3, 4, 5]", expected: 15 },
        { input: "[-1, 0, 1]", expected: 0 },
        { input: "[10, 20, 30]", expected: 60 }
      ]
    },
    {
      title: "String Reversal",
      description: "Write a method that reverses a string without using built-in Reverse() method.",
      template: `using System;

public class StringUtilities
{
    public static string ReverseString(string input)
    {
        // Your code here
        return input;
    }
}`,
      testCases: [
        { input: '"hello"', expected: '"olleh"' },
        { input: '"react"', expected: '"tcaer"' },
        { input: '"csharp"', expected: '"prahsc"' }
      ]
    }
  ];

  const runCode = () => {
    // Simulate code execution (in real app, this would use a code execution API)
    const puzzle = puzzles[currentPuzzle];
    let passed = 0;
    
    const results = puzzle.testCases.map(testCase => {
      // Simple simulation - real implementation would require code execution
      let result = "Simulated output";
      let success = Math.random() > 0.3; // Simulate some passing tests
      
      if (success) passed++;
      
      return {
        input: testCase.input,
        expected: testCase.expected,
        actual: success ? testCase.expected : "Wrong output",
        success
      };
    });

    setOutput(results.map((r, i) => 
      `Test ${i + 1}: ${r.success ? 'PASS' : 'FAIL'}\n` +
      `Input: ${r.input}\n` +
      `Expected: ${r.expected}\n` +
      `Actual: ${r.actual}\n`
    ).join('\n'));

    if (passed === puzzle.testCases.length) {
      setScore(score + 100);
      setCurrentPuzzle((currentPuzzle + 1) % puzzles.length);
      setUserCode(puzzles[(currentPuzzle + 1) % puzzles.length].template);
    }
  };

  return (
    <div className="csharp-game">
      <h3>C# Code Challenges</h3>
      <div className="game-info">
        <span>Puzzle: {currentPuzzle + 1}/{puzzles.length}</span>
        <span>Score: {score}</span>
      </div>

      <div className="puzzle-description">
        <h4>{puzzles[currentPuzzle].title}</h4>
        <p>{puzzles[currentPuzzle].description}</p>
      </div>

      <div className="code-editor">
        <textarea
          value={userCode || puzzles[currentPuzzle].template}
          onChange={(e) => setUserCode(e.target.value)}
          rows="15"
          placeholder="Write your C# code here..."
        />
      </div>

      <div className="game-controls">
        <button onClick={runCode} className="game-button">Run Code</button>
        <button onClick={() => setUserCode(puzzles[currentPuzzle].template)} className="game-button-secondary">
          Reset Code
        </button>
      </div>

      <div className="output-container">
        <h4>Test Results</h4>
        <pre className="output">{output || 'Run your code to see results...'}</pre>
      </div>
    </div>
  );
};

export default CSharpPuzzle;