function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

function fixString(string) {
  return string.replace(/&(lt|gt|ldquo|rdquo|quot|#039);/g, function (m, p) {
    return p === 'lt' ? '<' : p === 'gt' ? '>' : "'";
  });
}

export function Game({ step, question, questionsLength, handleClickOnAnswer }) {
  const percentage = (step / questionsLength) * 100;
  return (
    <>
      <div className="progress">
        <div
          style={{ width: `${percentage}%` }}
          className="progress__inner"
        ></div>
      </div>
      <h1>{question && fixString(question.question)}</h1>
      <ul>
        {question &&
          shuffleArray(
            question.incorrect_answers.concat(question.correct_answer)
          ).map((answer, index) => {
            const fixedAnswer = fixString(answer);
            return (
              <li key={index} onClick={() => handleClickOnAnswer(fixedAnswer)}>
                {fixedAnswer}
              </li>
            );
          })}
      </ul>
    </>
  );
}
