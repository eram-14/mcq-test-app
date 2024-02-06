import React from 'react';
import './ProgressBar.css';

const ProgressBar = ({ totalQuestions, currentQuestion }) => {
  const progress = ((currentQuestion + 1) / totalQuestions) * 100;

  return (
    <div className="progress-bar">
      <div className="progress" style={{ width: `${progress}%` }}></div>
    </div>
  );
};

export default ProgressBar;
