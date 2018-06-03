import axios from 'axios';
import { pipe } from 'ramda';

import quotes from './quotes.js';

const quoteRange = {
  min: 0,
  max: quotes.length - 1
};

export default () => pipe(getRandBetween, getQuoteFromJSON)(quoteRange);

const getRandBetween = ({ min, max }) => Math.floor(Math.random() * (max - min + 1) + min);

const getQuoteFromJSON = (idx) => quotes[idx];
