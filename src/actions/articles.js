import api from '../api';
import { createAction } from 'redux-actions';

import { fetchArticlesSuccess } from '../utils/dispatchHelpers';

export const fetchArticles = () => async (dispatch) => {
  const articles = await api.fetchArticlesSent();

  dispatch(fetchArticlesSuccess(articles));
};

export const togglePane = createAction('TOGGLE_PANE');
