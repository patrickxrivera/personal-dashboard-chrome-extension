const getClassName = (isHoveredClass, notHoveredClass = '') => (isHovered) =>
  isHovered ? isHoveredClass : notHoveredClass;

export const quoteBottomClassName = getClassName(
  'quote-bottom__hovered',
  'quote-bottom__not-hovered'
);

export const quoteClassName = getClassName('quote__hovered');

export const twitterIconClassName = getClassName('twitter-icon__hovered');

export const bottomWrapperClassName = getClassName('bottom-wrapper__hovered');
