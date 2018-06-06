import api from '../api';

import { createAction } from 'redux-actions';

import * as h from '../utils/dispatchHelpers';

export const fetchHackerNewsArticles = () => async (dispatch) => {
  const articles = await api.fetchHackerNewsArticlesSent();

  dispatch(h.fetchHackerNewsArticlesSuccess(articles));
};

export const fetchProductHuntArticles = () => async (dispatch) => {
  const articles = await api.fetchProductHuntArticlesSent();

  dispatch(h.fetchProductHuntArticlesSuccess(articles));
};

export const toggleHackerNewsPane = createAction('TOGGLE_HACKER_NEWS_PANE');

export const toggleProductHuntPane = createAction('TOGGLE_PRODUCT_HUNT_PANE');
