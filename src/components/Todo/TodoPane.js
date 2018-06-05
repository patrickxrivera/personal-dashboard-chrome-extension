import React from 'react';
import { isEmpty } from 'ramda';

import * as Style from './TodoStyles';

const Pane = (props) => (
  <Style.PaneWrapper>
    <Style.Heading>Today</Style.Heading>
    {isEmpty(props.todos) ? renderPlaceholder() : renderTodoList(props)}
    <Style.Input
      onKeyPress={props.handleKeyPress}
      value={props.newTodoVal}
      onChange={props.updateNewTodoVal}
      placeholder="New Todo"
      autoFocus
    />
  </Style.PaneWrapper>
);

const renderPlaceholder = () => <Style.Body>Add a new todo to get started</Style.Body>;

const renderTodoList = ({ todos, ...rest }) => (
  <Style.TodoList>{todos.map(renderTodo(rest))}</Style.TodoList>
);

const renderTodo = (props) => ({ isChecked, text, isHovered }, idx) => (
  <Style.TodoListItem
    onMouseEnter={() => props.todoIsHovered(idx)}
    onMouseLeave={() => props.todoNotHovered(idx)}
    key={text}>
    <div>
      <input
        onChange={() => props.toggleTodoCheckedState(idx)}
        type="checkbox"
        defaultChecked={isChecked}
      />
      <Style.TodoText isChecked={isChecked}>{text}</Style.TodoText>
    </div>
    <Style.IconWrapper isChecked={isChecked}>
      {isHovered && <Style.TrashIcon onClick={() => props.deleteTodo(idx)} />}
    </Style.IconWrapper>
  </Style.TodoListItem>
);

export default Pane;
