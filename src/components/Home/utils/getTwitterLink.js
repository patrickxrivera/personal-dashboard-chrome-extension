const ROOT_URL = `https://twitter.com/intent/tweet?text=`;

const createTweet = (quote, author) => `"${quote}" - ${author}`;

export default (...args) => `${ROOT_URL}${createTweet(...args)}`;
