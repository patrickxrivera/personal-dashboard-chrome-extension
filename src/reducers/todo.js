import { handleActions } from 'redux-actions';

const initialState = {
  paneIsActive: false,
  newTodoVal: '',
  todos: [
    { text: 'Read algorithm design manual', isChecked: false },
    { text: 'Do five code challenges', isChecked: false },
    { text: 'Finish sprint III for chrome extension', isChecked: false }
  ]
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
    })
  },
  initialState
);

export const getPaneIsActive = (state) => state.todo.paneIsActive;

export const getTodos = (state) => state.todo.todos;

export const getNewTodoVal = (state) => state.todo.newTodoVal;
