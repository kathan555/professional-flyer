// components/pages/games/TechQuiz.jsx
import React, { useState } from 'react';
import './TechQuiz.css';

const TechQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const quizQuestions = [
    {
      question: "Which technology uses XAML for UI design?",
      options: ["React", "WPF", "Both", "Neither"],
      correct: 1,
      explanation: "WPF uses XAML (eXtensible Application Markup Language) for UI design, while React uses JSX."
    },
    {
      question: "Which framework uses a virtual DOM for efficient updates?",
      options: ["WPF", "React", "Both", "Neither"],
      correct: 1,
      explanation: "React uses a virtual DOM to efficiently update the actual DOM, while WPF uses a different rendering system."
    },
    {
      question: "In which technology would you use MVVM pattern commonly?",
      options: ["React", "WPF", "Both", "Neither"],
      correct: 1,
      explanation: "WPF commonly uses the MVVM (Model-View-ViewModel) pattern, while React typically uses component-based architecture."
    },
    {
      question: "Which technology is primarily used for web development?",
      options: ["WPF", "React", "Both", "Neither"],
      correct: 1,
      explanation: "React is primarily for web development, while WPF is for desktop applications on Windows."
    }
  ];

  const handleAnswer = (selectedIndex) => {
    if (selectedIndex === quizQuestions[currentQuestion].correct) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < quizQuestions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
  };

  if (showResult) {
    return (
      <div className="quiz-game">
        <h3>WPF vs React Quiz</h3>
        <div className="quiz-result">
          <h4>Your Score: {score}/{quizQuestions.length}</h4>
          <p>Great job! You understand the differences between WPF and React.</p>
          <button onClick={restartQuiz} className="game-button">Play Again</button>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-game">
      <h3>WPF vs React Quiz</h3>
      <div className="quiz-info">
        <span>Question {currentQuestion + 1}/{quizQuestions.length}</span>
        <span>Score: {score}</span>
      </div>

      <div className="question-container">
        <h4>{quizQuestions[currentQuestion].question}</h4>
        <div className="options-grid">
          {quizQuestions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              className="option-button"
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {currentQuestion > 0 && (
        <div className="explanation">
          <p><strong>Previous:</strong> {quizQuestions[currentQuestion - 1].explanation}</p>
        </div>
      )}
    </div>
  );
};

export default TechQuiz;