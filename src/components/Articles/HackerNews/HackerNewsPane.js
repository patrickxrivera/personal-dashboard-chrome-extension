import React from 'react';

import * as Style from '../ArticlesStyles';
import { Heading } from '../../Todo/TodoStyles';

const COMMENTS_ROOT = 'https://news.ycombinator.com/item?id=';

const HackerNewsPane = ({ articles }) => (
  <Style.HackerNewsPaneWrapper>
    <Heading>Top Stories</Heading>
    {articles ? renderArticlesList(articles) : renderPlaceholder()}
  </Style.HackerNewsPaneWrapper>
);

const renderArticlesList = (articles) => (
  <Style.ArticlesList>{articles.map(renderArticle)}</Style.ArticlesList>
);

const renderArticle = ({ title, descendants, url, id }, idx) => (
  <Style.ArticleListItem key={title}>
    <Style.Count>
      <Style.Square>
        <Style.CountText>{idx + 1}</Style.CountText>
      </Style.Square>
    </Style.Count>
    <Style.Text>
      <Style.Title>
        <Style.Link target="_blank" href={url}>
          {title}
        </Style.Link>
      </Style.Title>
      <Style.Comments>
        <Style.Link target="_blank" href={`${COMMENTS_ROOT}${id}`}>
          {descendants === 1 ? `${descendants} comment` : `${descendants} comments`}
        </Style.Link>
      </Style.Comments>
    </Style.Text>
  </Style.ArticleListItem>
);

const renderPlaceholder = () => <div>I'm a silly placeholder</div>;

export default HackerNewsPane;
