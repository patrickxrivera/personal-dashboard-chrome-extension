import { handleActions } from 'redux-actions';

const initialState = {
  paneIsActive: true,
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
          isChecked: false,
          isHovered: false
        }
      ]
    }),
    DELETE_TODO: (state, action) => ({
      ...state,
      todos: state.todos.filter(todo(action))
    }),
    UPDATE_NEW_TODO_VAL: (state, action) => ({
      ...state,
      newTodoVal: action.payload.target.value
    }),
    TOGGLE_CHECKED_STATE: (state, action) => ({
      ...state,
      todos: state.todos.map(todo(action))
    }),
    TODO_IS_HOVERED: (state, action) => ({
      ...state,
      todos: state.todos.map(todo(action))
    }),
    TODO_NOT_HOVERED: (state, action) => ({
      ...state,
      todos: state.todos.map(todo(action))
    })
  },
  initialState
);

const todo = (action) => (state, idx) => {
  switch (action.type) {
    case 'DELETE_TODO':
      return idx !== action.payload;
    case 'TOGGLE_CHECKED_STATE':
      return toggle(idx, action, state, 'isChecked');
    case 'TODO_IS_HOVERED':
      return isHovered(action, state, idx);
    case 'TODO_NOT_HOVERED':
      return notHovered(action, state, idx);
    default:
      return state;
  }
};

const toggle = (idx, action, state, prop) =>
  idx === action.payload ? { ...state, [prop]: !state[prop] } : state;

// TODO: DRY these up
const isHovered = (action, state, idx) =>
  idx === action.payload ? { ...state, isHovered: true } : state;

const notHovered = (action, state, idx) =>
  idx === action.payload ? { ...state, isHovered: false } : state;

export const getPaneIsActive = (state) => state.todos.paneIsActive;

export const getTodos = (state) => state.todos.todos;

export const getNewTodoVal = (state) => state.todos.newTodoVal;
