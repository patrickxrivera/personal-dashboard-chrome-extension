import React, { Component } from 'react';

import Home from './Home';
import getQuote from './utils/getQuote';

class HomeContainer extends Component {
  state = {
    quoteData: null,
    isHovered: false
  };

  componentDidMount() {
    this.setState({ quoteData: getQuote() });
  }

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
