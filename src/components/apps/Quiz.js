import React, { useState, useEffect } from 'react';

const allQuestions = [
  { question: "What is the capital of France?", options: ["Paris", "London", "Rome", "Berlin"], answer: "Paris" },
  { question: "Which planet is known as the Red Planet?", options: ["Earth", "Mars", "Jupiter", "Saturn"], answer: "Mars" },
  { question: "What is the largest mammal in the world?", options: ["Elephant", "Blue Whale", "Giraffe", "Shark"], answer: "Blue Whale" },
  { question: "Which ocean is the largest?", options: ["Atlantic", "Indian", "Arctic", "Pacific"], answer: "Pacific" },
  { question: "Who wrote 'To Kill a Mockingbird'?", options: ["Harper Lee", "Mark Twain", "J.K. Rowling", "Ernest Hemingway"], answer: "Harper Lee" },
  { question: "What is the chemical symbol for Gold?", options: ["Au", "Ag", "Pb", "Fe"], answer: "Au" },
  { question: "What is the smallest prime number?", options: ["0", "1", "2", "3"], answer: "2" },
  { question: "In which year did the Titanic sink?", options: ["1912", "1905", "1898", "1923"], answer: "1912" },
  { question: "Which planet is closest to the Sun?", options: ["Venus", "Mars", "Mercury", "Earth"], answer: "Mercury" },
  { question: "What is the hardest natural substance on Earth?", options: ["Gold", "Iron", "Diamond", "Platinum"], answer: "Diamond" },
  { question: "Who painted the Mona Lisa?", options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"], answer: "Leonardo da Vinci" },
  { question: "What is the capital city of Japan?", options: ["Seoul", "Beijing", "Tokyo", "Kyoto"], answer: "Tokyo" },
  { question: "Which element has the atomic number 1?", options: ["Helium", "Hydrogen", "Lithium", "Beryllium"], answer: "Hydrogen" },
  { question: "What is the largest island in the world?", options: ["Australia", "Greenland", "New Guinea", "Borneo"], answer: "Greenland" },
  { question: "How many continents are there on Earth?", options: ["5", "6", "7", "8"], answer: "7" },
  { question: "What is the longest river in the world?", options: ["Nile", "Amazon", "Yangtze", "Mississippi"], answer: "Nile" },
  { question: "Which planet is known as the Morning Star?", options: ["Venus", "Mars", "Jupiter", "Saturn"], answer: "Venus" },
  { question: "What is the main ingredient in guacamole?", options: ["Tomato", "Pepper", "Avocado", "Onion"], answer: "Avocado" },
  { question: "Who discovered penicillin?", options: ["Alexander Fleming", "Marie Curie", "Louis Pasteur", "Gregor Mendel"], answer: "Alexander Fleming" },
  { question: "What is the largest organ in the human body?", options: ["Heart", "Liver", "Skin", "Lung"], answer: "Skin" },
  { question: "In which country did the Olympic Games originate?", options: ["Rome", "Greece", "China", "Egypt"], answer: "Greece" },
];

const getRandomQuestions = (questions, num) => {
  const shuffled = [...questions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
};

const Quiz = () => {
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);

  useEffect(() => {
    setQuizQuestions(getRandomQuestions(allQuestions, 5));
  }, []);

  const handleAnswer = (option) => {
    if (option === quizQuestions[currentQuestion].answer) {
      setScore(score + 1);
    }
    setAnswered(true);
  };

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setAnswered(false);
    } else {
      setQuizFinished(true);
    }
  };

  const restartQuiz = () => {
    setQuizQuestions(getRandomQuestions(allQuestions, 5));
    setCurrentQuestion(0);
    setScore(0);
    setAnswered(false);
    setQuizFinished(false);
  };

  return (
    <div className="app">
      <div className="question-container">
        {quizFinished ? (
          <div className="score-container">
            <h2>Quiz Finished!</h2>
            <p>Your score is <span className="score">{score}/{quizQuestions.length}</span></p>
            <button onClick={restartQuiz} className="restart-button">Restart Quiz</button>
          </div>
        ) : (
          quizQuestions.length > 0 && (
            <>
              <h2>{quizQuestions[currentQuestion].question}</h2>
              <div className="options-container">
                {quizQuestions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(option)}
                    disabled={answered}
                    className={`option-button ${answered ? (option === quizQuestions[currentQuestion].answer ? 'correct' : 'incorrect') : ''}`}
                  >
                    {option}
                  </button>
                ))}
              </div>
              <button
                onClick={handleNext}
                disabled={!answered}
                className="next-button"
              >
                {currentQuestion < quizQuestions.length - 1 ? 'Next' : 'Finish'}
              </button>
            </>
          )
        )}
      </div>
    </div>
  );
};

export default Quiz;
