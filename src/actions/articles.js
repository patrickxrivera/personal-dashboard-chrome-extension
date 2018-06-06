import api from '../api';
import axios from 'axios';
import { createAction } from 'redux-actions';

import * as h from '../utils/dispatchHelpers';

export const fetchHackerNewsArticles = () => async (dispatch) => {
  const articles = await api.fetchHackerNewsArticlesSent();

  dispatch(h.fetchHackerNewsArticlesSuccess(articles));
};

export const fetchProductHuntArticles = () => async (dispatch) => {
  // const articles = await axios.get('https://api.producthunt.com/v1/me/feed', {
  //   headers: {
  //     Authorization: 'Bearer 499ade07963af140ba379260556a120b53f84557ad623faf3e4dd98d8056c115'
  //   }
  // });
  //
  // console.log(articles);

  const articles = await api.fetchHackerNewsArticlesSent();

  dispatch(h.fetchProductHuntArticlesSuccess(articles));
};

export const toggleHackerNewsPane = createAction('TOGGLE_HACKER_NEWS_PANE');

export const toggleProductHuntPane = createAction('TOGGLE_PRODUCT_HUNT_PANE');
