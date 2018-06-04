import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import promptReducer from './prompt';

const rootReducer = combineReducers({
  form: formReducer,
  prompt: promptReducer
});

export default rootReducer;
