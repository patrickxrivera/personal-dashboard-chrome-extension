import axios from 'axios';
import { pipeP, pluck } from 'ramda';

import * as e from '../utils/endpoints';

export default {
  fetchHackerNewsArticlesSent: () =>
    pipeP(fetchTopStoriesIds, sliceTopFiveStories, fetchTopFiveStoriesData, pluck('data'))(
      e.HN_TOP_STORIES
    ),
  fetchProductHuntArticlesSent: () => pipeP(fetchTopPosts, sliceTopFivePosts)(e.PH_TOP_POSTS)
};

/* Hacker News Pipe */

const fetchTopStoriesIds = (endpoint) => axios.get(endpoint);

const sliceTopFiveStories = ({ data }) => data.slice(0, 5);

const fetchTopFiveStoriesData = (topFiveStoriesIds) =>
  Promise.all(topFiveStoriesIds.map(fetchEndpoints));

const fetchEndpoints = (id) => axios.get(createStoryEndpoint(id));

const createStoryEndpoint = (id) => `${e.HN_STORY}${id}.json`;

/* Product Hunt Pipe */

const fetchTopPosts = (endpoint) => axios.get(endpoint, e.PH_CONFIG);

const sliceTopFivePosts = ({ data }) => data.posts.slice(0, 5);
