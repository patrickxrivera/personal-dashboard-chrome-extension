import { handleActions } from 'redux-actions';

const initialState = {};

export default handleActions(
  {
    SET_GOAL_IS_SET_TO_TRUE: (state, action) => ({
      ...state,
      goalIsSet: true
    }),
    UPDATE_GOAL_VAL: (state, action) => ({
      ...state,
      goalVal: action.payload
    })
  },
  initialState
);

export const getGoalIsSet = (state) => state.prompt.goalIsSet;

export const getGoalVal = (state) => state.prompt.goalVal;
