import React, { Component } from 'react';

import Todo from './Todo';

class TodoContainer extends Component {
  state = {
    paneIsActive: true
  };

  handleTodoTextClick = () => {
    this.setState({ paneIsActive: !this.state.paneIsActive });
  };

  render() {
    return <Todo handleTodoTextClick={this.handleTodoTextClick} {...this.state} {...this.props} />;
  }
}

export default TodoContainer;
