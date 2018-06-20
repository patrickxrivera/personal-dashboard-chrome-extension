import { handleActions } from 'redux-actions';

const initialState = {
  hackerNews: {
    paneIsActive: true
  },
  productHunt: {}
};

export default handleActions(
  {
    FETCH_HACKER_NEWS_ARTICLES: (state, action) => ({
      ...state,
      hackerNews: {
        paneIsActive: state.hackerNews.paneIsActive,
        all: action.articles
      }
    }),
    TOGGLE_HACKER_NEWS_PANE: (state, action) => ({
      ...state,
      hackerNews: {
        paneIsActive: !state.hackerNews.paneIsActive,
        all: state.hackerNews.all
      }
    }),
    FETCH_PRODUCT_HUNT_ARTICLES: (state, action) => ({
      ...state,
      productHunt: {
        paneIsActive: state.productHunt.paneIsActive,
        all: action.articles
      }
    }),
    TOGGLE_PRODUCT_HUNT_PANE: (state, action) => ({
      ...state,
      productHunt: {
        paneIsActive: !state.productHunt.paneIsActive,
        all: state.productHunt.all
      }
    })
  },
  initialState
);

export const getHackerNewsArticles = (state) => state.articles.hackerNews.all;

export const getHackerNewsPaneState = (state) => state.articles.hackerNews.paneIsActive;

export const getProductHuntArticles = (state) => state.articles.productHunt.all;

export const getProductHuntPaneState = (state) => state.articles.productHunt.paneIsActive;
