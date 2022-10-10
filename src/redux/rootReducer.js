import { combineReducers } from 'redux';
import { historyResultReducer } from './historyResultReducer';
import { stepReducer } from './stepReducer';
import { nameReducer } from './nameReducer';
import { startReducer } from './startReducer';

/// / all our reducers//////

export const rootReducer = combineReducers({
  historyResultReducer,
  stepReducer,
  nameReducer,
  startReducer,
});
