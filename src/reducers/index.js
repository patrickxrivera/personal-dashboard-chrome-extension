import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import promptReducer from './prompt';
import todoReducer from './todo';

const rootReducer = combineReducers({
  form: formReducer,
  prompt: promptReducer,
  todo: todoReducer
});

export default rootReducer;
