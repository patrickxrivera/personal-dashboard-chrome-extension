import { pipe } from 'ramda';

import quotes from './data/quotes.js';
import { getRandBetween } from './helpers';

const quoteRange = {
  min: 0,
  max: quotes.length - 1
};

export default () => pipe(getRandBetween, getQuoteFromJSON)(quoteRange);

const getQuoteFromJSON = (idx) => quotes[idx];
