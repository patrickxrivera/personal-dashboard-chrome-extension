import axios from 'axios';
import { pipeP, pluck } from 'ramda';

const TOP_STORIES_ENDPOINT = 'https://hacker-news.firebaseio.com/v0/topstories.json';
const STORY_ROOT = 'https://hacker-news.firebaseio.com/v0/item/';

const PRODUCT_HUNT_ENDPOINT = 'https://api.producthunt.com/v1/me/feed';
const PRODUCT_HUNT_DEV_TOKEN = '499ade07963af140ba379260556a120b53f84557ad623faf3e4dd98d8056c115';
const PRODUCT_HUNT_CONFIG = {
  headers: {
    Authorization: `Bearer ${PRODUCT_HUNT_DEV_TOKEN}`
  }
};

export default {
  fetchHackerNewsArticlesSent: () =>
    pipeP(fetchTopStoriesIds, sliceTopFiveStories, fetchTopFiveStoriesData, pluck('data'))(
      TOP_STORIES_ENDPOINT
    ),
  fetchProductHuntArticlesSent: () => pipeP(fetchTopPosts, sliceTopFivePosts)(PRODUCT_HUNT_ENDPOINT)
};

/* Hacker News Pipe */

const fetchTopStoriesIds = (endpoint) => axios.get(TOP_STORIES_ENDPOINT);

const sliceTopFiveStories = ({ data }) => data.slice(0, 5);

const fetchTopFiveStoriesData = (topFiveStoriesIds) =>
  Promise.all(topFiveStoriesIds.map(fetchEndpoints));

const fetchEndpoints = (id) => axios.get(createStoryEndpoint(id));

const createStoryEndpoint = (id) => `${STORY_ROOT}${id}.json`;

/* Product Hunt Pipe */

const fetchTopPosts = (endpoint) => axios.get(endpoint, PRODUCT_HUNT_CONFIG);

const sliceTopFivePosts = ({ data }) => data.posts.slice(0, 5);
