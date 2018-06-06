import { pipe } from 'ramda';

import images from './data/images';
import { getRandBetween } from './helpers';

const SRC_ROOT = 'https://source.unsplash.com/';
const UNSPLASH_ROOT = 'https://unsplash.com/photos/';

const imageRange = {
  min: 0,
  max: images.length - 1
};

export default () => pipe(getRandBetween, selectImage, generateImageData)(imageRange);

const selectImage = (randIdx) => images[1];

const generateImageData = ({ author, id }) => ({
  src: `${SRC_ROOT}${id}/1510x810`,
  unsplash: `${UNSPLASH_ROOT}${id}`,
  credits: `Photo by ${author}`
});
