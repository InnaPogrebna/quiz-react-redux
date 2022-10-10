/* eslint-disable no-shadow */
import { RESULT, START_GAME, STEP, NAME } from './types';

export function saveResult(result, name, id) {
  return {
    type: RESULT,
    data: {
      result,
      name,
      id,
    },
  };
}

export function stepQuestion(stepQ) {
  return {
    type: STEP,
    data: {
      stepQ,
    },
  };
}

export function inputName(name) {
  return {
    type: NAME,
    name,
  };
}

export function startGame(start) {
  return {
    type: START_GAME,
    start,
  };
}
