import { useState } from "react";
import css from "./Result.module.css";

export function Result({
  questions,
  correctAnswers,
  selectedAnswers,
  questionsLength,
  handlePlayAgain,
}) {
  const [showAnswers, setShowAnswers] = useState(false);

  const toggleAnswers = () => {
    setShowAnswers(!showAnswers);
  };

  return (
    <>
      <div className={css.result}>
        <img
          className={css.result__image}
          src={
            correctAnswers === 0
              ? "https://cdn-icons-png.flaticon.com/512/166/166527.png"
              : "https://cdn-icons-png.flaticon.com/512/3322/3322105.png"
          }
          alt="success"
        />
        <h2 className={css.result__heading}>
          You got {correctAnswers} correct{" "}
          {correctAnswers === 1 ? "answer" : "answers"} out of {questionsLength}
        </h2>
        <button className={css.result__button} onClick={handlePlayAgain}>
          Try again
        </button>{" "}
        <button
          className={css.result__button}
          onClick={() => window.location.reload(false)}
        >
          Start new game
        </button>
        <button
          className={css.result__showAnswersButton}
          onClick={toggleAnswers}
        >
          {showAnswers ? "Hide answers" : "Show answers"}
        </button>
      </div>

      {showAnswers && (
        <div className={css.result__table}>
          <div className={css.result__row}>
            <div className={css.result__cell}>Question</div>
            <div className={css.result__cell}>Correct Answer</div>
            <div className={css.result__cell}>Your Answer</div>
          </div>
          {questions.map((question, index) => (
            <div className={css.result__row} key={index}>
              <div
                className={css.result__cell}
                dangerouslySetInnerHTML={{ __html: question.question }}
              ></div>
              <div
                className={css.result__cell}
                dangerouslySetInnerHTML={{ __html: question.correct_answer }}
              ></div>
              <div
                className={css.result__cell}
                dangerouslySetInnerHTML={{ __html: selectedAnswers[index] }}
              ></div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
