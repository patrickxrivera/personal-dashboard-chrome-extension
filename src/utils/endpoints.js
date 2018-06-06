import { isProdEnv } from './helpers';

export const HN_TOP_STORIES = 'https://hacker-news.firebaseio.com/v0/topstories.json';
export const HN_STORY = 'https://hacker-news.firebaseio.com/v0/item/';
export const HN_COMMENTS_ROOT = 'https://news.ycombinator.com/item?id=';

export const PH_TOP_POSTS = 'https://api.producthunt.com/v1/me/feed';

const PH_DEV_TOKEN = isProdEnv()
  ? process.env.REACT_APP_PROD_PH_TOKEN
  : process.env.REACT_APP_DEV_PH_TOKEN;

export const PH_CONFIG = {
  headers: {
    Authorization: `Bearer ${PH_DEV_TOKEN}`
  }
};
