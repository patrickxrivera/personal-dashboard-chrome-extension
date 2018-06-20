import React, { Component } from 'react';
import { connect } from 'react-redux';

import HackerNews from './HackerNews';
import { getHackerNewsArticles, getHackerNewsPaneState } from '../../../reducers/articles';
import { fetchHackerNewsArticles, toggleHackerNewsPane } from '../../../actions/articles';

class HackerNewsContainer extends Component {
  modal = React.createRef();

  componentWillMount() {
    document.addEventListener('mousedown', this.handleContainerClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleContainerClick, false);
  }

  componentDidMount() {
    this.props.fetchHackerNewsArticles();
  }

  handleContainerClick = (e) => {
    if (this.modal.current.contains(e.target)) return;

    this.handleClickOutsidePane();
  };

  handleClickOutsidePane = () => {
    const { paneIsActive, toggleHackerNewsPane } = this.props;

    if (paneIsActive) {
      toggleHackerNewsPane();
    }
  };

  render() {
    return (
      <div ref={this.modal}>
        <HackerNews {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  articles: getHackerNewsArticles(state),
  paneIsActive: getHackerNewsPaneState(state)
});

export default connect(mapStateToProps, { fetchHackerNewsArticles, toggleHackerNewsPane })(
  HackerNewsContainer
);
