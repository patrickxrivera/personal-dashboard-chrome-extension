import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProductHunt from './ProductHunt';
import { getProductHuntArticles, getProductHuntPaneState } from '../../../reducers/articles';
import { fetchProductHuntArticles, toggleProductHuntPane } from '../../../actions/articles';

class ProductHuntContainer extends Component {
  componentDidMount() {
    this.props.fetchProductHuntArticles();
  }

  render() {
    return <ProductHunt {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  articles: getProductHuntArticles(state),
  paneIsActive: getProductHuntPaneState(state)
});

export default connect(mapStateToProps, { fetchProductHuntArticles, toggleProductHuntPane })(
  ProductHuntContainer
);
