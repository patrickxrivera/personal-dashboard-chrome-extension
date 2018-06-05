import React from 'react';
import { isEmpty } from 'ramda';

import * as Style from './TodoStyles';

const Pane = ({ todos, newTodoVal, handleKeyPress, updateTodoCheckedState, updateNewTodoVal }) => (
  <Style.PaneWrapper>
    <Style.Heading>Today</Style.Heading>
    {isEmpty(todos) ? renderPlaceholder() : renderTodoList(todos, updateTodoCheckedState)}
    <Style.Input
      onKeyPress={handleKeyPress}
      value={newTodoVal}
      onChange={updateNewTodoVal}
      placeholder="New Todo"
      autoFocus
    />
  </Style.PaneWrapper>
);

const renderPlaceholder = () => <Style.Body>Add a new todo to get started</Style.Body>;

const renderTodoList = (todos, updateTodoCheckedState) => (
  <Style.TodoList>{todos.map(renderTodo(updateTodoCheckedState))}</Style.TodoList>
);

const renderTodo = (updateTodoCheckedState) => ({ isChecked, text }, idx) => (
  <Style.TodoListItem key={text}>
    <input
      onChange={(e) => updateTodoCheckedState(idx)}
      type="checkbox"
      defaultChecked={isChecked}
    />
    <Style.TodoText isChecked={isChecked}>{text}</Style.TodoText>
  </Style.TodoListItem>
);

export default Pane;
