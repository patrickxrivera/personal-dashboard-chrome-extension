import React, { Component } from 'react';
import { connect } from 'react-redux';

import Articles from './Articles';
import { getAllArticles } from '../../reducers/articles';

class ArticlesContainer extends Component {
  state = {
    paneIsActive: false
  };

  togglePane = () => {
    this.setState({ paneIsActive: !this.state.paneIsActive });
  };

  render() {
    return <Articles {...this.state} {...this.props} togglePane={this.togglePane} />;
  }
}

const mapStateToProps = (state) => ({
  articles: getAllArticles(state)
});

export default connect(mapStateToProps)(ArticlesContainer);
