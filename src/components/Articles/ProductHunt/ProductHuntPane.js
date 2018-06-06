import React from 'react';

import * as Style from '../ArticlesStyles';
import { Heading } from '../../Todo/TodoStyles';

const ProductHuntPane = ({ articles }) => (
  <Style.ProductHuntPaneWrapper>
    <Heading>Top Posts</Heading>
    {articles ? renderArticlesList(articles) : renderPlaceholder()}
  </Style.ProductHuntPaneWrapper>
);

const renderArticlesList = (articles) => (
  <Style.ArticlesList>{articles.map(renderArticle)}</Style.ArticlesList>
);

const renderArticle = ({ name, comments_count, discussion_url, redirect_url, tagline }, idx) => (
  <Style.ArticleListItem key={name}>
    <Style.Count>
      <Style.ProductHuntSquare>
        <Style.CountText>{idx + 1}</Style.CountText>
      </Style.ProductHuntSquare>
    </Style.Count>
    <Style.Text>
      <Style.Title>
        <Style.Link target="_blank" href={redirect_url}>
          {name}
        </Style.Link>
        <Style.Tagline>{tagline}</Style.Tagline>
      </Style.Title>
      <Style.Comments>
        <Style.Link target="_blank" href={discussion_url}>
          {comments_count} comments
        </Style.Link>
      </Style.Comments>
    </Style.Text>
  </Style.ArticleListItem>
);

const renderPlaceholder = () => <div>I'm a silly placeholder</div>;

export default ProductHuntPane;
