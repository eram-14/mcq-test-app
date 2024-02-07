// Result.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Result = ({ results, onRestart }) => {
  const navigate = useNavigate();

  const handleRestart = () => {
    onRestart();
    navigate('/');
  };

  const getBadgeClass = (result) => {
    return result === 'correct' ? 'success' : 'danger';
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Results</h2>
      <div className="row">
        {results.map((result, index) => (
          <div key={index} className="col-md-6 mb-3">
            <div className={`list-group-item bg-light rounded p-3 border border-${getBadgeClass(result)}`}>
              Question {index + 1}: {result === 'correct' ? 'Correct' : 'Incorrect'}
            </div>
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-center mt-4">
        <button className="btn btn-dark mb-3" onClick={handleRestart}>
          Start Again
        </button>
      </div>
    </div>
  );
};

export default Result;
