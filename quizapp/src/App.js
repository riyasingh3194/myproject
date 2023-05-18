import React, { useState, useEffect } from "react";
import "./App.css"

const questionsData = [
  {
    question: "Question 1",
    options: ["hu", "kk", "jj", "jj"],
    correctAnswer: 2
  },
  {
    question: "Question 2",
    options: ["Option 1", "Option 2", "Option 3", "Option 4"],
    correctAnswer: 1
  },
  {
    question: "Question 3",
    options: ["Option A", "Option B", "Option C", "Option D"],
    correctAnswer: 0
  },
  {
    question: "Question 4",
    options: ["Answer A", "Answer B", "Answer C", "Answer D"],
    correctAnswer: 3
  },
  {
    question: "Question 5",
    options: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
    correctAnswer: 2
  },
  {
    question: "Question 6",
    options: ["Alternative 1", "Alternative 2", "Alternative 3", "Alternative 4"],
    correctAnswer: 1
  },
  {
    question: "Question 7",
    options: ["Option X", "Option Y", "Option Z", "Option W"],
    correctAnswer: 3
  },
  {
    question: "Question 8",
    options: ["Solution A", "Solution B", "Solution C", "Solution D"],
    correctAnswer: 0
  },
  {
    question: "Question 9",
    options: ["Variant 1", "Variant 2", "Variant 3", "Variant 4"],
    correctAnswer: 1
  },
  {
    question: "Question 10",
    options: ["Item 1", "Item 2", "Item 3", "Item 4"],
    correctAnswer: 2
  }
];
export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleOptionChange = (e) => {
    setSelectedOption(parseInt(e.target.value));
  };

  const handleNextQuestion = () => {
    if (selectedOption !== null) {
      const updatedScore = score + (selectedOption === questionsData[currentQuestion].correctAnswer ? 2 : 0);
      setScore(updatedScore);
      setSelectedOption(null);

      if (currentQuestion === questionsData.length - 1) {
        setShowResult(true);
      } else {
        setCurrentQuestion((prevQuestion) => prevQuestion + 1);
      }
    }
  };

  const handleTestRestart = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setScore(0);
    setShowResult(false);
    window.location.href="/"
  };

  const renderQuestion = () => {
    const question = questionsData[currentQuestion];
    return (
      <div>
        <h3>{question.question}</h3>
        {question.options.map((option, index) => (
          <label key={index}>
            <input
              type="radio"
              name="option"
              value={index}
              checked={selectedOption === index}
              onChange={handleOptionChange}
            />
            {option}
          </label>
        ))}
      </div>
    );
  };

  const renderResult = () => {
    return (
      <div className="result">
        <h2>Result:</h2>
        <p>Score: {score}/20</p>
        {score >= 12 ? (
          <p>Congratulations! You passed the test.</p>
        ) : (
          <div>
            <p>Sorry! You failed the test.</p>
            <button onClick={handleTestRestart}>Restart Test</button>
          </div>
        )}
      </div>
    );
  };

  if (showResult) {
    return renderResult();
  }

  return (
    <div>
      <h1>Quiz App</h1>
      {renderQuestion()}
      <button onClick={handleNextQuestion} disabled={selectedOption === null}
       className="btn"
      >
        {currentQuestion === questionsData.length - 1 ? "Submit" : "Next"}
      </button>
      <p className="time">Time Left: {Math.floor(timeLeft / 60)}:{timeLeft % 60}</p>
    </div>
  );
}