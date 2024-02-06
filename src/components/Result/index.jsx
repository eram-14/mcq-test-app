import React from 'react';
import { useNavigate } from 'react-router-dom';

const Result = ({ results, onRestart }) => {
  const navigate = useNavigate();

  const handleRestart = () => {
    onRestart();
    navigate('/');
  };

  return (
    <div className="container my-3">
      <h2>Results</h2>
      <ul className="list-group">
        {results.map((result, index) => (
          <li key={index} className={`list-group-item ${result === 'correct' ? 'list-group-item-success' : 'list-group-item-danger'}`}>
            Question {index + 1}: {result === 'correct' ? 'Correct' : 'Incorrect'}
          </li>
        ))}
      </ul>
      <button className="btn btn-dark mt-3" onClick={handleRestart}>
        Start Again
      </button>
    </div>
  );
};

export default Result;
