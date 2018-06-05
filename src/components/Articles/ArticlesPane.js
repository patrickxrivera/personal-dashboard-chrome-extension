import React from 'react';

import * as Style from './ArticlesStyles';
import { Heading } from '../Todo/TodoStyles';

const ArticlesPane = ({ articles }) => (
  <Style.PaneWrapper>
    <Heading>Top Stories</Heading>
    <Style.ArticlesList>{articles.map(renderArticle)}</Style.ArticlesList>
  </Style.PaneWrapper>
);

const renderArticle = ({ title, descendants }, idx) => (
  <Style.ArticleListItem key={title}>
    <Style.Count>
      <Style.Square>
        <Style.CountText>{idx + 1}</Style.CountText>
      </Style.Square>
    </Style.Count>
    <Style.Text>
      <Style.Title>{title}</Style.Title>
      <Style.Comments>{descendants} comments</Style.Comments>
    </Style.Text>
  </Style.ArticleListItem>
);

export default ArticlesPane;
