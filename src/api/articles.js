import axios from 'axios';
import { pipeP, pluck } from 'ramda';

const TOP_STORIES_ENDPOINT = 'https://hacker-news.firebaseio.com/v0/topstories.json';
const STORY_ROOT = 'https://hacker-news.firebaseio.com/v0/item/';

export default {
  fetchHackerNewsArticlesSent: () =>
    pipeP(fetchTopStoriesIds, sliceTopFiveStories, fetchTopFiveStoriesData, pluck('data'))(
      TOP_STORIES_ENDPOINT
    )
};

const fetchTopStoriesIds = (endpoint) => axios.get(TOP_STORIES_ENDPOINT);

const sliceTopFiveStories = ({ data }) => data.slice(0, 5);

const fetchTopFiveStoriesData = (topFiveStoriesIds) =>
  Promise.all(topFiveStoriesIds.map(fetchEndpoints));

const fetchEndpoints = (id) => axios.get(createStoryEndpoint(id));

const createStoryEndpoint = (id) => `${STORY_ROOT}${id}.json`;
