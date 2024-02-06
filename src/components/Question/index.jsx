import React from 'react';

const Question = ({ question, options, onSelect, selectedOption, isCorrect, isIncorrect, currentQuestion, totalQuestions, difficulty }) => {
  const decodedQuestion = decodeURIComponent(question);
  const decodedOptions = options.map((option) => decodeURIComponent(option));

  const getDifficultyRating = () => {
    switch (difficulty) {
      case 'easy':
        return '★☆☆';
      case 'medium':
        return '★★☆';
      case 'hard':
        return '★★★';
      default:
        return '';
    }
  };

  return (
    <div className="question-container">
      <div className="question-info mb-3">
        <p>
          Question {currentQuestion} of {totalQuestions}
        </p>
        <p>
          {getDifficultyRating()}
        </p>
      </div>
      <h3>{decodedQuestion}</h3>
      <div className="row">
        {decodedOptions.map((option, index) => (
          <div
            key={index}
            className={`col-md-6 mb-3`}
            onClick={() => onSelect(option)}
          >
            <div
              className={`card ${selectedOption === option ? 'bg-dark text-white' : 'bg-light'}`}
            >
              <div className="card-body">
                <p className="card-text">{option}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Question;
