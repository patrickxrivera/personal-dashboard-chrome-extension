import getQuote from '../utils/getQuote';
import getNewImage from '../utils/getNewImage';
import { createAction } from 'redux-actions';
import { refreshQuoteDataSuccess, refreshImageDataSuccess } from '../utils/dispatchHelpers';

export const refreshQuoteData = () => (dispatch) => {
  const quoteData = getQuote();

  dispatch(refreshQuoteDataSuccess(quoteData));
};

export const refreshImageData = () => (dispatch) => {
  const imageData = getNewImage();

  dispatch(refreshImageDataSuccess(imageData));
};

export const updateLatestDate = createAction('UPDATE_LATEST_DATE');
