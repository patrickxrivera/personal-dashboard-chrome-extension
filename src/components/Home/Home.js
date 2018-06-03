import React from 'react';

import * as Style from './HomeStyles';
import * as get from './utils/getClassName';
import getCurrentTime from './utils/getCurrentTime';
import getTwitterLink from './utils/getTwitterLink';
import './styles.css';

const Home = ({ author, quote, isHovered, handleMouseOver, handleMouseLeave }) => (
  <div>
    <Style.BackgroundImg src="https://source.unsplash.com/2LOkiyi97GM/1510x810" />
    <Style.Wrapper>
      <Style.TopWrapper>
        <Style.ArticlesWrapper>Articles</Style.ArticlesWrapper>
        <Style.TweetsWrapper>Tweets</Style.TweetsWrapper>
      </Style.TopWrapper>
      <Style.MiddleWrapper>
        <Style.Time>{getCurrentTime()}</Style.Time>
        <Style.Greeting>Good afternoon, Patrick.</Style.Greeting>
        <Style.Prompt>What is your main focus today?</Style.Prompt>
        <Style.PromptInput />
      </Style.MiddleWrapper>
      <Style.BottomWrapper>
        <Style.Settings>Settings</Style.Settings>
        <Style.QuoteWrapper onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
          <Style.Quote className={get.quoteClassName(isHovered)}>"{quote}"</Style.Quote>
          <Style.QuoteBottom className={get.quoteBottomClassName(isHovered)}>
            <Style.QuoteAuthor>{author}</Style.QuoteAuthor>
            <a target="_blank" href={`${getTwitterLink(quote, author)}`}>
              <Style.TwitterIcon className={get.twitterIconClassName(isHovered)} />
            </a>
          </Style.QuoteBottom>
        </Style.QuoteWrapper>
        <Style.Todo>Todo</Style.Todo>
      </Style.BottomWrapper>
    </Style.Wrapper>
  </div>
);

export default Home;
