import { handleActions } from 'redux-actions';

const initialState = {
  isAuthenticated: false
};

export default handleActions(
  {
    SET_NAME: (state, action) => ({
      ...state,
      isAuthenticated: true,
      name: action.payload
    })
  },
  initialState
);

export const getAuthenticationStatus = (state) => state.auth.isAuthenticated;

export const getName = (state) => state.auth.name;
