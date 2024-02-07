import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { questionsData } from './data/questionsData';
import Quiz from './components/Quiz';
import Result from './components/Result';
import ProgressBar from './components/ProgressBar';
import TestProgress from './components/TestProgress';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const [results, setResults] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleAnswer = (selectedOption) => {
    const isCorrect = selectedOption === decodeURI(questionsData[currentQuestion].correct_answer);
    setResults((prevResults) => [...prevResults, isCorrect ? 'correct' : 'incorrect']);
    setCurrentQuestion((prev) => prev + 1);
  };

  const handleRestart = () => {
    setResults([]);
    setCurrentQuestion(0);
  };

  return (
    <Router>
      <div className="container mt-5 text-left" style={{ maxWidth: '800px' }}>
        <ProgressBar totalQuestions={questionsData.length} currentQuestion={currentQuestion} />

        <Routes>
          <Route path="/" element={<Quiz questions={questionsData} onAnswer={handleAnswer} />} />
          <Route path="/result" element={<Result results={results} onRestart={handleRestart} />} />
        </Routes>
        <TestProgress
          results={results}
          totalQuestions={questionsData.length}
          currentQuestion={currentQuestion}
          maxPossibleScore={questionsData.length}
        />
      </div>
    </Router>
  );
};

export default App;
