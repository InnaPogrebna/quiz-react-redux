import { RESULT } from './types';

/// / reducer for history result component //////

const initialState = {
  result: [],
};

export const historyResultReducer = (state = initialState, action) => {
  switch (action.type) {
  case RESULT:
    return {
      ...state,
      result: [action.data, ...state.result],
    };

  default:
    return state;
  }
};
