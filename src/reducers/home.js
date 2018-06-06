import { handleActions } from 'redux-actions';

const initialState = {
  latestDate: 1406019110000 // === arbitrarily old date
};

export default handleActions(
  {
    REFRESH_QUOTE_DATA: (state, action) => ({
      ...state,
      quoteData: action.quoteData
    }),
    REFRESH_IMAGE_DATA: (state, action) => ({
      ...state,
      imageData: action.imageData
    }),
    UPDATE_LATEST_DATE: (state, action) => ({
      ...state,
      latestDate: action.payload._i
    })
  },
  initialState
);

export const getQuoteData = (state) => state.home.quoteData;

export const getImageData = (state) => state.home.imageData;

export const getLatestDate = (state) => state.home.latestDate;
