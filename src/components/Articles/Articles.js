import React from 'react';

import * as Style from './ArticlesStyles';
import ArticlesPane from './ArticlesPane';

const Articles = ({ paneIsActive, togglePane, ...rest }) => (
  <div>
    {paneIsActive && <ArticlesPane {...rest} />}
    <Style.ArticlesText onClick={togglePane}>Hacker News</Style.ArticlesText>
  </div>
);

export default Articles;
