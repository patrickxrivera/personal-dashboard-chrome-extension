import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import promptReducer from './prompt';
import todosReducer from './todos';

const rootReducer = combineReducers({
  form: formReducer,
  prompt: promptReducer,
  todos: todosReducer
});

export default rootReducer;
