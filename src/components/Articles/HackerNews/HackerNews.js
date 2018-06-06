import React from 'react';

import * as Style from '../ArticlesStyles';
import HackerNewsPane from './HackerNewsPane';

const HackerNews = ({ paneIsActive, toggleHackerNewsPane, ...rest }) => (
  <div>
    {paneIsActive && <HackerNewsPane {...rest} />}
    <Style.ArticlesText onClick={toggleHackerNewsPane}>Hacker News</Style.ArticlesText>
  </div>
);

export default HackerNews;
