import React from 'react';
import './Question.css';

const Question = ({ question, options, onSelect, selectedOption, isCorrect, isIncorrect }) => {
  const decodedQuestion = decodeURIComponent(question);
  const decodedOptions = options.map((option) => decodeURIComponent(option));

  return (
    <div>
      <h3>{decodedQuestion}</h3>
      <ul>
        {decodedOptions.map((option, index) => (
          <li
            key={index}
            onClick={() => onSelect(option)}
            className={selectedOption === option ? (isCorrect ? 'correct' : 'incorrect') : ''}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;
