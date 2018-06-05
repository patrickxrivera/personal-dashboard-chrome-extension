import React from 'react';
import { isEmpty } from 'ramda';

import * as Style from './TodoStyles';

const Pane = ({ todos, newTodoVal, handleKeyPress, updateNewTodoVal }) => (
  <Style.PaneWrapper>
    <Style.Heading>Today</Style.Heading>
    {isEmpty(todos) ? renderPlaceholder() : renderTodoList(todos)}
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

const renderTodoList = (todos) => <Style.TodoList>{todos.map(renderTodo)}</Style.TodoList>;

const renderTodo = ({ isChecked, text }) => (
  <Style.TodoListItem key={text}>
    <input type="checkbox" />
    <Style.TodoText>{text}</Style.TodoText>
  </Style.TodoListItem>
);

export default Pane;
