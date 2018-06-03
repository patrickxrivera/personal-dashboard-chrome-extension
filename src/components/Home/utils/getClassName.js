const getClassName = (className) => (isHovered) => (isHovered ? className : '');

export const quoteBottomClassName = getClassName('quote-bottom__hovered');

export const quoteClassName = getClassName('quote__hovered');

export const twitterIconClassName = getClassName('twitter-icon__hovered');
