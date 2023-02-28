export function Result({ correct, questionsLength }) {
  return (
    <div className="result">
      <img
        src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png"
        alt="success"
      />
      <h2>
        You got {correct} correct {correct === 1 ? 'answer' : 'answers'} out of{' '}
        {questionsLength}
      </h2>
      <button onClick={() => window.location.reload(false)}>Try again</button>
    </div>
  );
}
