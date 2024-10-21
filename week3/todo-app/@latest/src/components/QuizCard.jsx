import React, { useState, useEffect } from 'react';
import styles from '../ReactQuiz.module.css';

export const ReactQuiz = () => {
  const questions = [
    {
      question: "What does the useState hook return?",
      options: [
        "A string",
        "An array with the state and a setter function",
        "An object with state properties",
      ],
      answer: "An array with the state and a setter function",
    },
    {
      question: "Who is the CEO of Tesla?",
      options: ["Elon Musk", "Bill Gates", "Steve Jobs"],
      answer: "Elon Musk",
    },
    {
      question: "Which company is known for its revolutionary product, the iPhone?",
      options: ["Apple", "Google", "Microsoft"],
      answer: "Apple",
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);

  const currentQuestion = questions[currentQuestionIndex];

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          handleNextQuestion();
          return 15;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentQuestionIndex]);

  const handleNextQuestion = () => {
    if (selectedAnswer === currentQuestion.answer) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer("");
      setTimeLeft(15);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className={styles.quizCard}>
      <h1 className={styles.title}>Quiz Card</h1>
      {!showResult ? (
        <div className={styles.questionContainer}>
          <div className={styles.timerInfo}>
            <span>Time left: {timeLeft}s</span>
            <span>
              Question {currentQuestionIndex + 1} of {questions.length}
            </span>
          </div>
          <div className={styles.progressBar}>
            <div
              className={styles.progressFill}
              style={{ width: `${(timeLeft / 15) * 100}%` }}
            ></div>
          </div>
          <h2 className={styles.question}>{currentQuestion.question}</h2>
          <ul className={styles.optionsList}>
            {currentQuestion.options.map((option, index) => (
              <li key={index}>
                <button
                  className={`${styles.optionButton} ${
                    selectedAnswer === option ? styles.selected : ''
                  }`}
                  onClick={() => setSelectedAnswer(option)}
                >
                  {option}
                </button>
              </li>
            ))}
          </ul>
          <button
            className={styles.nextButton}
            onClick={handleNextQuestion}
            disabled={!selectedAnswer}
          >
            Next Question
          </button>
        </div>
      ) : (
        <div className={styles.resultContainer}>
          <h1 className={styles.score}>Score: {score}</h1>
          <h2 className={styles.completed}>Quiz Completed!</h2>
          <p className={styles.message}>You have completed the quiz.</p>
        </div>
      )}
    </div>
  );
}