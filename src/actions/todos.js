import { createAction } from 'redux-actions';

export const togglePaneState = createAction('TOGGLE_PANE_STATE');

export const addTodo = createAction('ADD_TODO');

export const updateNewTodoVal = createAction('UPDATE_NEW_TODO_VAL');

export const updateTodoCheckedState = createAction('UPDATE_CHECKED_STATE');
