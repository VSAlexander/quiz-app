import css from "./Game.module.css";

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

export function Game({ step, question, questionsLength, handleClickOnAnswer }) {
  const percentage = (step / questionsLength) * 100;
  return (
    <div className={css.questionBox}>
      <div className={css.progress}>
        <div
          style={{ width: `${percentage}%` }}
          className={css.progress__inner}
        ></div>
      </div>
      <h1
        className={css.question__heading}
        dangerouslySetInnerHTML={{ __html: question.question }}
      ></h1>
      <ul className={css.question__list}>
        {question &&
          shuffleArray(
            question.incorrect_answers.concat(question.correct_answer)
          ).map((answer, index) => {
            return (
              <li
                className={css.question__listItem}
                key={index}
                onClick={() => handleClickOnAnswer(answer)}
                dangerouslySetInnerHTML={{ __html: answer }}
              ></li>
            );
          })}
      </ul>
    </div>
  );
}
