import React from 'react';
import { useLocation } from 'react-router-dom';

const TestProgress = ({ results, totalQuestions, currentQuestion }) => {
    const location = useLocation();
    const showProgressBar = location.pathname !== '/result';
    const answeredQuestions = results.length;
    const correctAnswers = results.filter((result) => result === 'correct').length;
    const incorrectAnswers = results.filter((result) => result === 'incorrect').length;

    const maxPossibleScore = totalQuestions - incorrectAnswers;

    const userPercentage = answeredQuestions > 0 ? (correctAnswers / answeredQuestions) * 100 : 0;
    const maxScorePercentage = totalQuestions > 0 ? (maxPossibleScore / totalQuestions) * 100 : 0;
    const attemptsPercentage = (answeredQuestions / totalQuestions) * 100;

    return showProgressBar && (
        <div className="test-progress-container">
            <div className="progress-labels d-flex justify-content-between">
                <p>Score: {Math.round(userPercentage)}%</p>
                <p>Max Score: {Math.round(maxScorePercentage)}%</p>
            </div>
            <div className="progress">
                <div style={{ width: `${userPercentage}%`, backgroundColor: '#000000', color: '#FFFFFF' }}></div>
                <div style={{ width: `${attemptsPercentage}%`, backgroundColor: '#808080', color: '#FFFFFF' }}></div>
                <div style={{ width: `${maxScorePercentage}%`, backgroundColor: '#D3D3D3', color: '#000000' }}></div>
                <div style={{ width: `${100 - attemptsPercentage - maxScorePercentage - userPercentage}%`, backgroundColor: '#FFFFFF' }}></div>
            </div>
        </div>
    );
};

export default TestProgress;
