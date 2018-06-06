import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';

import App from './App';
import { getAuthenticationStatus, getName } from '../../reducers/auth';
import { getQuoteData, getImageData, getLatestDate } from '../../reducers/home';
import { refreshQuoteData, refreshImageData, updateLatestDate } from '../../actions/home';

class AppContainer extends Component {
  componentDidMount() {
    this.maybeRefreshQuoteAndImage();
  }

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

  render() {
    return <App {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: getAuthenticationStatus(state),
  quoteData: getQuoteData(state),
  imageData: getImageData(state),
  latestDate: getLatestDate(state),
  getName: getName(state)
});

export default connect(mapStateToProps, { refreshQuoteData, refreshImageData, updateLatestDate })(
  AppContainer
);
