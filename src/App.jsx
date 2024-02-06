import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { questionsData } from './data/questionsData';
import Quiz from './components/Quiz';
import Result from './components/Result';
import ProgressBar from './components/ProgressBar';

const App = () => {
  const [results, setResults] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleAnswer = (selectedOption, currentQuestion) => {
    const isCorrect = selectedOption === questionsData[currentQuestion].correct_answer;
    setResults((prevResults) => [...prevResults, isCorrect ? 'correct' : 'incorrect']);
    setCurrentQuestion((prev) => prev + 1);
  };

  const handleRestart = () => {
    setResults([]);
    setCurrentQuestion(0);
  };

  return (
    <Router>
      <div>
        <ProgressBar totalQuestions={questionsData.length} currentQuestion={currentQuestion} />
        <Routes>
          <Route
            path="/"
            element={<Quiz questions={questionsData} onAnswer={handleAnswer} />}
          />
          <Route path="/result" element={<Result results={results} onRestart={handleRestart} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;