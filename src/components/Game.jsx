/* eslint-disable react/prop-types */
import React from 'react';
import { questions } from '../questions';

export const Game = ({ step, question, onClickVariant }) => {
  const percentage = Math.ceil(step / questions.length * 100);

  return (
    <>
      <div className="progress">
        <div style={{ width: `${percentage}%` }} className="progress__inner" />
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((item, index) => (
          <li key={item} onClick={() => onClickVariant(index)}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};
