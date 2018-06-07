import React from 'react';
import { func, shape, bool, string } from 'prop-types';

import * as Style from './HomeStyles';
import * as get from './utils/getClassName';
import PromptContainer from '../Prompt/PromptContainer';
import TodoContainer from '../Todo/TodoContainer';
import HackerNewsContainer from '../Articles/HackerNews/HackerNewsContainer';
import ProductHuntContainer from '../Articles/ProductHunt/ProductHuntContainer';

const Home = (props) => (
  <div>
    <Style.BackgroundImg src={props.src} />
    {props.timeIsLoaded && (
      <Style.Wrapper isHome={true}>
        <Style.TopWrapper>
          <HackerNewsContainer />
          <ProductHuntContainer />
        </Style.TopWrapper>

        <Style.MiddleWrapper>
          <Style.Middle>
            <Style.GreetingWrapper>
              <Style.Time>{props.currentTime}</Style.Time>
              <Style.Greeting>
                Good {props.greeting}, {props.name}.
              </Style.Greeting>
            </Style.GreetingWrapper>
            <PromptContainer />
          </Style.Middle>
        </Style.MiddleWrapper>

        <Style.BottomWrapper>
          <Style.ImgLocation className={get.bottomWrapperClassName(props.isHovered)}>
            <a style={Style.link} href={props.unsplash} target="_blank">
              {props.credits}
            </a>
          </Style.ImgLocation>
          <Style.QuoteWrapper>
            <Style.Quote>"{props.quote}"</Style.Quote>
          </Style.QuoteWrapper>
          <TodoContainer {...props} />
        </Style.BottomWrapper>
      </Style.Wrapper>
    )}
  </div>
);

Home.propTypes = {
  quoteData: shape({
    quote: string.isRequired,
    author: string.isRequired
  }),
  image: shape({
    src: string.isRequired,
    unsplash: string.isRequired,
    location: string.isRequired
  }),
  handleMouseOver: func.isRequired,
  handleMouseLeave: func.isRequired,
  currentTime: string,
  greeting: string,
  isHovered: bool,
  timeIsLoaded: bool
};

export default Home;
