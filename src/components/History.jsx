/* eslint-disable no-shadow */
import React from 'react';
import { useSelector } from 'react-redux';

export function History() {
  const historyResult = useSelector((state) => {
    const { historyResultReducer } = state;

    return historyResultReducer.result;
  });

  return (
    <div className="history">
      {historyResult.length !== 0 && (
        <ul>
          {historyResult.map(res => (
            <li key={res.id}>
              {res.name}
              :
              {' '}
              {res.result}
              {' '}
              correct answer
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
