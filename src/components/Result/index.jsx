import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Result.css';

const Result = ({ results, onRestart }) => {
  const navigate = useNavigate();

  const handleRestart = () => {
    onRestart();
    navigate('/');
  };

  return (
    <div>
      <h2>Results</h2>
      <ul>
        {results.map((result, index) => (
          <li key={index}>
            Question {index + 1}: {result === 'correct' ? 'Correct' : 'Incorrect'}
          </li>
        ))}
      </ul>
      <button onClick={handleRestart}>Start Again</button>
    </div>
  );
};

export default Result;
