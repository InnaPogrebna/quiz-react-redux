import React from 'react';
import { useSelector } from 'react-redux';
import { questions } from '../questions';

export function Counter() {
  const stepQ = useSelector((state) => {
    const { stepReducer } = state;

    return stepReducer.stepQ;
  });

  return (
    <div>
      <p>
        {stepQ < questions.length ? stepQ : questions.length}
        /
        {' '}
        {questions.length}
      </p>
    </div>
  );
}
