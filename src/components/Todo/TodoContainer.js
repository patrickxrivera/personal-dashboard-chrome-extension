import React, { Component } from 'react';
import { connect } from 'react-redux';

import Todo from './Todo';
import { togglePaneState, addTodo, updateNewTodoVal } from '../../actions/todo';
import { getPaneIsActive, getTodos, getNewTodoVal } from '../../reducers/todo';
import { isEnterKey } from '../../utils/helpers';

class TodoContainer extends Component {
  handleKeyPress = (e) => {
    if (isEnterKey(e)) this.props.addTodo(e.target.value);
  };

  render() {
    return <Todo {...this.props} handleKeyPress={this.handleKeyPress} />;
  }
}

const mapStateToProps = (state) => ({
  todos: getTodos(state),
  newTodoVal: getNewTodoVal(state),
  paneIsActive: getPaneIsActive(state)
});

export default connect(mapStateToProps, { togglePaneState, addTodo, updateNewTodoVal })(
  TodoContainer
);
