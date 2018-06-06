import React, { Component } from 'react';
import { connect } from 'react-redux';

import Articles from './Articles';
import { getAllArticles, getPaneIsActive } from '../../reducers/articles';
import { fetchArticles, togglePane } from '../../actions/articles';

class ArticlesContainer extends Component {
  componentDidMount() {
    this.props.fetchArticles();
  }

  render() {
    return <Articles {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  articles: getAllArticles(state),
  paneIsActive: getPaneIsActive(state)
});

export default connect(mapStateToProps, { fetchArticles, togglePane })(ArticlesContainer);
