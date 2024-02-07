import React, { useState, useEffect } from 'react';
import Question from '../Question';
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
    if (questions[currentQuestion]) {
      onAnswer(selectedOption);
      if (isLastQuestion) {
        navigate('/result');
      } else {
        setCurrentQuestion((prev) => prev + 1);
      }
    }
  };

  return (
    <div className="container my-3">
      {questions[currentQuestion] && (
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
            currentQuestion={currentQuestion + 1}
            totalQuestions={questions.length}
            difficulty={questions[currentQuestion].difficulty}
          />
          {isIncorrect && <p className="text-dark fw-bold text-center">Sorry. Please try again.</p>}
          {isCorrect && <p className="text-dark fw-bold text-center">Correct!</p>}
          <div className="text-center mb-5 mt-4">
            <button className="btn btn-dark" onClick={handleNext} disabled={!selectedOption}>
              {isLastQuestion ? 'Show Result' : 'Next Question'}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;
