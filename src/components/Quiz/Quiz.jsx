import { useState } from "react";
import Notiflix from "notiflix";

import { QuizSetup } from "components/QuizSetup/QuizSetup";
import { Game } from "components/Game/Game";
import { Result } from "components/Result/Result";

export function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [step, setStep] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);

  const [gameStarted, setGameStarted] = useState(false);
  const [playAgain, setPlayAgain] = useState(false);

  const question = questions[step];

  const handleClickOnAnswer = (answer) => {
    setStep(step + 1);
    setSelectedAnswers([...selectedAnswers, answer]);
    if (answer === question.correct_answer) {
      setCorrectAnswers(correctAnswers + 1);
    }
  };

  const startGame = (data) => {
    if (data.length === 0) {
      Notiflix.Notify.failure(
        "No such number of questions was found. Try a smaller number"
      );

      return;
    }
    setQuestions(data);
    setGameStarted(true);
  };

  const handlePlayAgain = () => {
    setStep(0);
    setCorrectAnswers(0);
    setSelectedAnswers([]);
    setGameStarted(false);
    setPlayAgain(true);
  };

  return (
    <>
      {!gameStarted && !playAgain && <QuizSetup startGame={startGame} />}
      {(gameStarted || playAgain) &&
        (step !== questions.length ? (
          <Game
            step={step}
            question={question}
            questionsLength={questions.length}
            handleClickOnAnswer={handleClickOnAnswer}
          />
        ) : (
          <Result
            questions={questions}
            selectedAnswers={selectedAnswers}
            correctAnswers={correctAnswers}
            questionsLength={questions.length}
            handlePlayAgain={handlePlayAgain}
          />
        ))}
    </>
  );
}
