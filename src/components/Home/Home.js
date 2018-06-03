import React from 'react';

import * as Style from './HomeStyles';
import * as get from './utils/getClassName';
import getTwitterLink from './utils/getTwitterLink';
import './styles.css';

const Home = (props) => (
  <div>
    <Style.BackgroundImg src="https://source.unsplash.com/2LOkiyi97GM/1510x810" />
    {props.timeIsLoaded && (
      <Style.Wrapper>
        <Style.TopWrapper>
          <Style.ArticlesWrapper>Articles</Style.ArticlesWrapper>
          <Style.TweetsWrapper>Tweets</Style.TweetsWrapper>
        </Style.TopWrapper>

        <Style.MiddleWrapper>
          <Style.Time>{props.currentTime}</Style.Time>
          <Style.Greeting>Good {props.greeting}, Patrick.</Style.Greeting>
          <Style.Prompt>What is your main focus today?</Style.Prompt>
          <Style.PromptInput />
        </Style.MiddleWrapper>

        <Style.BottomWrapper>
          <Style.Settings className={get.bottomWrapperClassName(props.isHovered)}>
            Settings
          </Style.Settings>
          <Style.QuoteWrapper
            onMouseOver={props.handleMouseOver}
            onMouseLeave={props.handleMouseLeave}>
            <Style.Quote className={get.quoteClassName(props.isHovered)}>
              "{props.quote}"
            </Style.Quote>
            <Style.QuoteBottom className={get.quoteBottomClassName(props.isHovered)}>
              <Style.QuoteAuthor>{props.author}</Style.QuoteAuthor>
              <a target="_blank" href={`${getTwitterLink(props.quote, props.author)}`}>
                <Style.TwitterIcon className={get.twitterIconClassName(props.isHovered)} />
              </a>
            </Style.QuoteBottom>
          </Style.QuoteWrapper>
          <Style.Todo className={get.bottomWrapperClassName(props.isHovered)}>Todo</Style.Todo>
        </Style.BottomWrapper>
      </Style.Wrapper>
    )}
  </div>
);

export default Home;
