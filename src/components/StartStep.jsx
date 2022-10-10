/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { inputName, startGame } from '../redux/action';

export function StartPage() {
  const [inputText, setInputText] = useState('');
  const [isStart, setIsStart] = useState(false);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleNameSubmit = (e) => {
    e.preventDefault();
    dispatch(inputName(inputText));
    setIsStart(true);
    dispatch(startGame(true));
    setInputText('');
  };

  return (
    <div className="name-block">
      <form className="name-block__form" onSubmit={handleNameSubmit}>
        <input
          type="text"
          className="name-block__form-name input is-info"
          onChange={handleChange}
          value={inputText}
          placeholder="Enter your name"
        />
        <button
          type="submit"
          className="button is-info name-block__form-btn"
          disabled={inputText === ''}
        >
          Start
        </button>
      </form>
    </div>
  );
}
