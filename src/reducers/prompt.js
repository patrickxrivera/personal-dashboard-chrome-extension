import { handleActions } from 'redux-actions';

const initialState = { isCheckedOff: false };

export default handleActions(
  {
    SET_GOAL_IS_SET_TO_TRUE: (state, action) => ({
      ...state,
      goalIsSet: true
    }),
    UPDATE_GOAL_VAL: (state, action) => ({
      ...state,
      goalVal: action.payload.target.value
    }),
    RESET_GOAL: (state, action) => ({
      ...state,
      goalIsSet: false,
      isCheckedOff: false,
      goalVal: ''
    }),
    TOGGLE_CHECKBOX: (state, action) => ({
      ...state,
      isCheckedOff: !state.isCheckedOff
    })
  },
  initialState
);

export const getGoalIsSet = (state) => state.prompt.goalIsSet;

export const getGoalVal = (state) => state.prompt.goalVal;

export const getIsCheckedOff = (state) => state.prompt.isCheckedOff;
