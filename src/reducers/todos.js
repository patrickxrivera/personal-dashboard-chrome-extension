import { handleActions } from 'redux-actions';

const initialState = {
  paneIsActive: false,
  newTodoVal: '',
  todos: []
};

export default handleActions(
  {
    TOGGLE_PANE_STATE: (state, action) => ({
      ...state,
      paneIsActive: !state.paneIsActive
    }),
    ADD_TODO: (state, action) => ({
      ...state,
      newTodoVal: '',
      todos: [
        ...state.todos,
        {
          text: action.payload,
          isChecked: false
        }
      ]
    }),
    UPDATE_NEW_TODO_VAL: (state, action) => ({
      ...state,
      newTodoVal: action.payload.target.value
    }),
    UPDATE_CHECKED_STATE: (state, action) => ({
      ...state,
      todos: state.todos.map(todo(action))
    })
  },
  initialState
);

const todo = (action) => (state, idx) => {
  switch (action.type) {
    case 'UPDATE_CHECKED_STATE':
      return idx === action.payload ? { ...state, isChecked: !state.isChecked } : state;
    default:
      return state;
  }
};

export const getPaneIsActive = (state) => state.todos.paneIsActive;

export const getTodos = (state) => state.todos.todos;

export const getNewTodoVal = (state) => state.todos.newTodoVal;
