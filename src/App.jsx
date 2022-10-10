/* eslint-disable no-shadow */
import React, { useState } from 'react';
import 'bulma/css/bulma.min.css';
import './App.scss';
import uniqid from 'uniqid';
import { useDispatch, useSelector } from 'react-redux';
import { saveResult, stepQuestion, startGame } from './redux/action';
import { Game } from './components/Game';
import { Result } from './components/Result';
import { History } from './components/History';
import { Counter } from './components/Counter';
import { questions } from './questions';
import { StartPage } from './components/StartStep';

function App() {
  const [step, setStep] = useState(0);
  const question = questions[step];
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const dispatch = useDispatch();

  const stepQ = useSelector((state) => {
    const { stepReducer } = state;

    return stepReducer.stepQ;
  });

  const name = useSelector((state) => {
    const { nameReducer } = state;

    return nameReducer.name;
  });

  const start = useSelector((state) => {
    const { startReducer } = state;

    return startReducer.start;
  });

  const history = useSelector((state) => {
    const { historyResultReducer } = state;

    return historyResultReducer.result;
  });

  const onClickVariant = (index) => {
    setStep(step + 1);
    dispatch(stepQuestion(stepQ + 1));

    if (index === question.correct) {
      setCorrectAnswer(correctAnswer + 1);
    }
  };

  const getStart = () => {
    const id = uniqid();

    dispatch(saveResult(correctAnswer, name, id));
    dispatch(stepQuestion(1));
    dispatch(startGame(false));
    setStep(0);
    setCorrectAnswer(0);
  };

  return (
    <div className="app__container">
      <h1 className="title app__title">React Quiz</h1>
      <div className="app">
        {!start && (
          <>
            <StartPage />
            {history.length > 0 && <History />}
          </>
        )}
        {start
          && (step !== questions.length ? (
            <>
              <Counter />
              <Game question={question} onClickVariant={onClickVariant} />
            </>
          ) : (
            <Result correctAnswer={correctAnswer} getStart={getStart} />
          ))}
      </div>
    </div>
  );
}

export default App;
