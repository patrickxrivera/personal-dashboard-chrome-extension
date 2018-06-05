import { createAction } from 'redux-actions';

export const togglePaneState = createAction('TOGGLE_PANE_STATE');

export const addTodo = createAction('ADD_TODO');

export const deleteTodo = createAction('DELETE_TODO');

export const updateNewTodoVal = createAction('UPDATE_NEW_TODO_VAL');

export const toggleTodoCheckedState = createAction('TOGGLE_CHECKED_STATE');

export const todoIsHovered = createAction('TODO_IS_HOVERED');

export const todoNotHovered = createAction('TODO_NOT_HOVERED');
