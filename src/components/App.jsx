import { useState } from 'react';
import { useEffect } from 'react';

import axios from 'axios';

import { Game } from './Game/Game';
import { Result } from './Result/Result';

export const App = () => {
  const [step, setStep] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [correct, setCorrect] = useState(0);

  const question = questions[step];

  const handleClickOnAnswer = answer => {
    setStep(step + 1);
    if (answer === question.correct_answer) {
      setCorrect(correct + 1);
    }
  };

  useEffect(() => {
    const fetchQA = async () => {
      const { data } = await axios.get('https://opentdb.com/api.php?', {
        params: {
          category: 11,
          amount: 10,
          difficulty: 'medium',
        },
      });

      setQuestions(data.results);
    };
    fetchQA();
  }, []);

  return (
    <div className="App">
      {step !== questions.length || step === 0 ? (
        <Game
          step={step}
          question={question}
          questionsLength={questions.length}
          handleClickOnAnswer={handleClickOnAnswer}
        />
      ) : (
        <Result correct={correct} questionsLength={questions.length} />
      )}
    </div>
  );
};
