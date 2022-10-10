import { STEP } from './types';
import { questions } from '../questions';

/// / reducer for step component //////

const initialState = {
  stepQ: 1,
};

export const stepReducer = (state = initialState, action) => {
  switch (action.type) {
  case STEP:
    if (state.stepQ > questions.length) {
      return {
        ...state,
        stepQ: 1,
      };
    }

    return {
      ...state,
      stepQ: Number(state.stepQ) + 1,
    };

  default:
    return state;
  }
};
