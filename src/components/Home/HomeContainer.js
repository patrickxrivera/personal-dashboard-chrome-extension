import React, { Component } from 'react';
import { connect } from 'react-redux';

import Home from './Home';
import { getName } from '../../reducers/auth';
import { getCurrentTime, getGreeting } from './utils/getTime';

class HomeContainer extends Component {
  state = {
    currentTime: null,
    greeting: null,
    isHovered: false,
    timeisLoaded: false
  };

  componentDidMount() {
    this.initCurrentTimeInterval();
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
        {...this.props}
        {...this.props.quoteData}
        {...this.props.imageData}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  name: getName(state)
});

export default connect(mapStateToProps)(HomeContainer);
