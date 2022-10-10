/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector } from 'react-redux';
import { questions } from '../questions';
import happy from '../image/celebrating.png';
import unhappy from '../image/anxiety.png';

export function Result({ correctAnswer, getStart }) {
  const name = useSelector((state) => {
    const { nameReducer } = state;

    return nameReducer.name;
  });

  return (
    <div className="result">
      <img
        src={correctAnswer > questions.length - 1 ? happy : unhappy}
        alt="img"
      />
      <h2>
        {name}
        : Correct
        {' '}
        {correctAnswer}
        {' '}
        from
        {' '}
        {questions.length}
      </h2>
      <button type="button" onClick={getStart}>
        Start again
      </button>
    </div>
  );
}
