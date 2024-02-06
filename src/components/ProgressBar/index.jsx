import React from 'react';
import { useLocation } from 'react-router-dom';

const ProgressBar = ({ totalQuestions, currentQuestion }) => {
  const location = useLocation();
  const showProgressBar = location.pathname !== '/result';

  const progress = ((currentQuestion + 1) / totalQuestions) * 100;

  return showProgressBar && (
    <div className="progress-bar">
      <div className="progress" style={{ width: `${progress}%` }}></div>
    </div>
  );
};

export default ProgressBar;
