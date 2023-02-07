import React, { useState } from "react";

const QuizApp = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const questions = [
    {
      question: "What is the capital of France?",
      choices: ["Paris", "Berlin", "Madrid", "Rome"],
      correctAnswer: "Paris",
    },
    {
      question: 'Who wrote "War and Peace"?',
      choices: ["Rodrigo Duterte", "Joma Sison", "Leo Tolstoy", "Ninoy Aquino"],
      correctAnswer: "Leo Tolstoy",
    },
    {
      question: "What is the tallest mountain in the world?",
      choices: ["Mount Everest", "Mt. Apo", "Mt.Pinatubo", "Mt.Sinai"],
      correctAnswer: "Mount Everest",
    },
    {
      question: "Who painted the Mona Lisa?",
      choices: [
        "Juan Luna",
        "Leonardo da Vinci",
        "Gioachino Rossini",
        "Lhotse",
      ],
      correctAnswer: "Leonardo da Vinci",
    },
    {
      question: 'Who wrote the novel "To Kill a Mockingbird"??',
      choices: [
        "Gioachino Rossini",
        "Nevill Goddard",
        "Allan Watts",
        "Harper Lee",
      ],
      correctAnswer: "Harper Lee",
    },
    {
      question: "Who invented the lightbulb?",
      choices: [
        "Thomas Edison",
        "Nikola Tesla",
        "Albert Einstein",
        "Alexander Volta",
      ],
      correctAnswer: "Thomas Edison",
    },
    {
      question: "What is the currency used in Japan?",
      choices: ["Dong", "Yen", "Peso", "Euro"],
      correctAnswer: "Yen",
    },
    {
      question: 'Who composed the opera "The Barber of Seville"',
      choices: ["Nevill Goddard", "Allan Watts", "Gioachino Rossini", "Lhotse"],
      correctAnswer: "Gioachino Rossini",
    },
    {
      question: "Who was the first US president?",
      choices: [
        "Abraham Lincoln",
        "George Washington",
        "John F.Kennedy",
        "Donald Trump",
      ],
      correctAnswer: "George Washington",
    },
    {
      question: "What is the largest ocean in the world?",
      choices: [
        "Phillipine Sea",
        "Atlantic Ocean",
        "Mediterannian Sea",
        " The Pacific Ocean",
      ],
      correctAnswer: " The Pacific Ocean",
    },
  
  ];
  const currentQuestion = questions[currentQuestionIndex];

  const handleChoiceSelection = (selectedChoice) => {
    if (selectedChoice === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  return (
    <div className="quiz-app">
      <h1 className="quiz-app__title">Quiz App</h1>
      {currentQuestionIndex < questions.length ? (
        <div className="quiz-app__question-container">
          <p className="quiz-app__question-number">
            Question {currentQuestionIndex + 1} of {questions.length}:
          </p>
          <p className="quiz-app__question">{currentQuestion.question}</p>
          <div className="quiz-app__choices-container">
            {currentQuestion.choices.map((choice) => (
              <button
                className="quiz-app__choice-button"
                onClick={() => handleChoiceSelection(choice)}
              >
                {choice}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="quiz-app__final-score">
          <p className="quiz-app__final-score-text">
            Your score: {score} / {questions.length}
          </p>
        </div>
      )}
    </div>
  );
};

export default QuizApp;
