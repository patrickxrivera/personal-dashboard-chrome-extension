import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';

import Home from './Home';
import { getQuoteData, getImageData, getLatestDate } from '../../reducers/home';
import { refreshQuoteData, refreshImageData, updateLatestDate } from '../../actions/home';
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
    this.maybeRefreshQuoteAndImage();
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

  maybeRefreshQuoteAndImage = () => {
    const { updateLatestDate, refreshQuoteData, refreshImageData } = this.props;
    const now = moment(Date.now());

    if (this.isNewDate(now)) {
      updateLatestDate(now);
      refreshQuoteData();
      refreshImageData();
    }
  };

  isNewDate = (now) => !now.isSame(this.props.latestDate, 'd');

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
        {...this.props.quoteData}
        {...this.props.imageData}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  quoteData: getQuoteData(state),
  imageData: getImageData(state),
  latestDate: getLatestDate(state)
});

export default connect(mapStateToProps, { refreshQuoteData, refreshImageData, updateLatestDate })(
  HomeContainer
);
