import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import homeReducer from './home';
import promptReducer from './prompt';
import todosReducer from './todos';
import articlesReducer from './articles';
import authReducer from './auth';

const rootReducer = combineReducers({
  form: formReducer,
  home: homeReducer,
  prompt: promptReducer,
  todos: todosReducer,
  articles: articlesReducer,
  auth: authReducer
});

export default rootReducer;
