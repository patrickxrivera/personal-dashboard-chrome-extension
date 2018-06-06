import React from 'react';

import * as Style from '../ArticlesStyles';
import { Heading } from '../../Todo/TodoStyles';
import { HN_COMMENTS_ROOT } from '../../../utils/endpoints';

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
        <Style.Link target="_blank" href={`${HN_COMMENTS_ROOT}${id}`}>
          {descendants === 1 ? `${descendants} comment` : `${descendants} comments`}
        </Style.Link>
      </Style.Comments>
    </Style.Text>
  </Style.ArticleListItem>
);

const renderPlaceholder = () => <div>No stories available. Check back later!</div>;

export default HackerNewsPane;
