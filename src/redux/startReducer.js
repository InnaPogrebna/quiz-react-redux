import { START_GAME } from './types';

/// / reducer for StartPage component //////

const initialState = {
  start: false,
};

export const startReducer = (state = initialState, action) => {
  switch (action.type) {
  case START_GAME:
    return {
      ...state,
      start: action.start,
    };
  default:
    return state;
  }
};
