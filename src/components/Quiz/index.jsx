import React, { useState, useEffect } from 'react';
import Question from '../Question';
import './Quiz.css'
import { useNavigate } from 'react-router-dom';

const Quiz = ({ questions, onAnswer }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isIncorrect, setIsIncorrect] = useState(false);
  const isLastQuestion = currentQuestion === questions.length - 1;
  const navigate = useNavigate();

  useEffect(() => {
    setSelectedOption(null);
    setIsCorrect(false);
    setIsIncorrect(false);
  }, [currentQuestion]);

  const handleSelect = (option) => {
    setSelectedOption(option);
    const correctAnswer = decodeURIComponent(questions[currentQuestion].correct_answer);
    const isAnswerCorrect = option === correctAnswer;

    setIsCorrect(isAnswerCorrect);
    setIsIncorrect(!isAnswerCorrect);
  };

  const handleNext = () => {
    if (questions && questions[currentQuestion]) {
      onAnswer(selectedOption, currentQuestion);

      if (isLastQuestion) {
        navigate('/result');
      } else {
        setCurrentQuestion((prev) => prev + 1);
      }
    }
  };

  return (
    <div>
      {questions && questions[currentQuestion] && (
        <>
          <Question
            question={questions[currentQuestion].question}
            options={[
              ...questions[currentQuestion].incorrect_answers,
              questions[currentQuestion].correct_answer,
            ]}
            onSelect={handleSelect}
            selectedOption={selectedOption}
            isCorrect={isCorrect}
            isIncorrect={isIncorrect}
          />
          {isCorrect && <p className="feedback">Correct!</p>}
          {isIncorrect && <p className="feedback">Sorry. Please try again.</p>}
          <button onClick={handleNext} disabled={!selectedOption}>
            {isLastQuestion ? 'Show Result' : 'Next Question'}
          </button>
        </>
      )}
    </div>
  );
};

export default Quiz;
