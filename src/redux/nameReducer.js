import { NAME } from './types';

/// / reducer for StartPage component //////

const initialState = {
  name: '',
};

export const nameReducer = (state = initialState, action) => {
  switch (action.type) {
  case NAME:
    return {
      ...state,
      name: action.name,
    };
  default:
    return state;
  }
};
