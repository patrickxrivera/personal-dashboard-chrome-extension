import { handleActions } from 'redux-actions';

const initialState = {
  paneIsActive: false
};

export default handleActions(
  {
    FETCH_ARTICLES: (state, action) => ({
      ...state,
      all: action.articles
    }),
    TOGGLE_PANE: (state, action) => ({
      ...state,
      paneIsActive: !state.paneIsActive
    })
  },
  initialState
);

export const getAllArticles = (state) => state.articles.all;

export const getPaneIsActive = (state) => state.articles.paneIsActive;
