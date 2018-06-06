import React, { Component } from 'react';
import { connect } from 'react-redux';

import HackerNews from './HackerNews';
import { getHackerNewsArticles, getHackerNewsPaneState } from '../../../reducers/articles';
import { fetchHackerNewsArticles, toggleHackerNewsPane } from '../../../actions/articles';

class HackerNewsContainer extends Component {
  componentDidMount() {
    this.props.fetchHackerNewsArticles();
  }

  render() {
    return <HackerNews {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  articles: getHackerNewsArticles(state),
  paneIsActive: getHackerNewsPaneState(state)
});

export default connect(mapStateToProps, { fetchHackerNewsArticles, toggleHackerNewsPane })(
  HackerNewsContainer
);
