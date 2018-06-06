import PH_DEV_TOKEN from '../keys';

export const HN_TOP_STORIES = 'https://hacker-news.firebaseio.com/v0/topstories.json';
export const HN_STORY = 'https://hacker-news.firebaseio.com/v0/item/';
export const HN_COMMENTS_ROOT = 'https://news.ycombinator.com/item?id=';

export const PH_TOP_POSTS = 'https://api.producthunt.com/v1/me/feed';

export const PH_CONFIG = {
  headers: {
    Authorization: `Bearer ${PH_DEV_TOKEN}`
  }
};
