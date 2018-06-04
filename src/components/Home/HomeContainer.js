import React, { Component } from 'react';

import Home from './Home';
import getQuote from './utils/getQuote';
import images, { SRC_ROOT, UNSPLASH_ROOT } from './utils/images';
import { getCurrentTime, getGreeting } from './utils/getTime';

class HomeContainer extends Component {
  state = {
    quoteData: null,
    currentTime: null,
    greeting: null,
    image: null,
    isHovered: false,
    timeisLoaded: false
  };

  componentDidMount() {
    this.initCurrentTimeInterval();
    this.setQuoteData();
    this.setImage();
  }

  initCurrentTimeInterval = () => {
    setInterval(this.setCurrentTime, 1000);
  };

  setCurrentTime = () => {
    this.setState({
      currentTime: getCurrentTime(),
      greeting: getGreeting(),
      timeIsLoaded: true
    });
  };

  setQuoteData = () => {
    this.setState({ quoteData: getQuote() });
  };

  setImage = () => {
    this.setState({
      image: {
        src: `${SRC_ROOT}${images.day[0].id}/1510x810`,
        unsplash: `${UNSPLASH_ROOT}${images.day[0].id}`,
        location: images.day[0].location
      }
    });
  };

  handleMouseOver = () => {
    this.setState({ isHovered: true });
  };

  handleMouseLeave = () => {
    this.setState({ isHovered: false });
  };

  render() {
    return (
      <Home
        handleMouseOver={this.handleMouseOver}
        handleMouseLeave={this.handleMouseLeave}
        {...this.state}
        {...this.state.quoteData}
        {...this.state.image}
      />
    );
  }
}

export default HomeContainer;
