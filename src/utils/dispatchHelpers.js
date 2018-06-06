export const fetchHackerNewsArticlesSuccess = (articles) => ({
  type: 'FETCH_HACKER_NEWS_ARTICLES',
  articles
});

export const fetchProductHuntArticlesSuccess = (articles) => ({
  type: 'FETCH_PRODUCT_HUNT_ARTICLES',
  articles
});

export const refreshQuoteDataSuccess = (quoteData) => ({
  type: 'REFRESH_QUOTE_DATA',
  quoteData
});

export const refreshImageDataSuccess = (imageData) => ({
  type: 'REFRESH_IMAGE_DATA',
  imageData
});
