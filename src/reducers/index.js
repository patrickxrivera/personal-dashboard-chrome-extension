import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import promptReducer from './prompt';
import todosReducer from './todos';
import articlesReducer from './articles';

const rootReducer = combineReducers({
  form: formReducer,
  prompt: promptReducer,
  todos: todosReducer,
  articles: articlesReducer
});

export default rootReducer;
