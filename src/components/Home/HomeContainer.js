import React, { Component } from 'react';

import Home from './Home';
import getQuote from './utils/getQuote';

class HomeContainer extends Component {
  state = {
    quoteData: getQuote(),
    isHovered: false
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
        isHovered={this.state.isHovered}
        {...this.state.quoteData}
      />
    );
  }
}

export default HomeContainer;
