import React, { Component } from 'react';

import Home from './Home';
import getQuote from './utils/getQuote';
import { getCurrentTime, getGreeting } from './utils/getTime';

class HomeContainer extends Component {
  state = {
    quoteData: null,
    currentTime: null,
    greeting: null,
    isHovered: false,
    timeisLoaded: false
  };

  componentDidMount() {
    this.initCurrentTimeInterval();
    this.setQuoteData();
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
      />
    );
  }
}

export default HomeContainer;
