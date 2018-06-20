import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProductHunt from './ProductHunt';
import { getProductHuntArticles, getProductHuntPaneState } from '../../../reducers/articles';
import { fetchProductHuntArticles, toggleProductHuntPane } from '../../../actions/articles';

class ProductHuntContainer extends Component {
  modal = React.createRef();

  componentWillMount() {
    document.addEventListener('mousedown', this.handleContainerClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleContainerClick, false);
  }

  componentDidMount() {
    this.props.fetchProductHuntArticles();
  }

  handleContainerClick = (e) => {
    if (this.modal.current.contains(e.target)) return;

    this.handleClickOutsidePane();
  };

  handleClickOutsidePane = () => {
    const { paneIsActive, toggleProductHuntPane } = this.props;

    if (paneIsActive) {
      toggleProductHuntPane();
    }
  };

  render() {
    return (
      <div ref={this.modal}>
        <ProductHunt {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  articles: getProductHuntArticles(state),
  paneIsActive: getProductHuntPaneState(state)
});

export default connect(mapStateToProps, { fetchProductHuntArticles, toggleProductHuntPane })(
  ProductHuntContainer
);
