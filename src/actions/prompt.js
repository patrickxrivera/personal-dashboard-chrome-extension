import { createAction } from 'redux-actions';

export const setGoalIsSetToTrue = createAction('SET_GOAL_IS_SET_TO_TRUE');

export const updateGoalVal = createAction('UPDATE_GOAL_VAL');

export const resetGoal = createAction('RESET_GOAL');

export const toggleCheckbox = createAction('TOGGLE_CHECKBOX');
