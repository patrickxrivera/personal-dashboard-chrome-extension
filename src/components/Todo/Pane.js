import React from 'react';

import * as Style from './TodoStyles';

const Pane = ({}) => (
  <Style.PaneWrapper>
    <Style.Heading>Today</Style.Heading>
    {/* <Style.Body>Add a new todo to get started</Style.Body> */}
    <Style.TodoList>
      <Style.TodoListItem>
        <input type="checkbox" />
        <Style.TodoText>Read Algorithm Design Manual</Style.TodoText>
      </Style.TodoListItem>
      <Style.TodoListItem>
        <input type="checkbox" />
        <Style.TodoText>Do five Interview Cake problems</Style.TodoText>
      </Style.TodoListItem>
      <Style.TodoListItem>
        <input type="checkbox" />
        <Style.TodoText>Finish sprint for personal project</Style.TodoText>
      </Style.TodoListItem>
      <Style.TodoListItem>
        <input type="checkbox" />
        <Style.TodoText>Finish sprint for personal project</Style.TodoText>
      </Style.TodoListItem>
      <Style.TodoListItem>
        <input type="checkbox" />
        <Style.TodoText>Finish sprint for personal project</Style.TodoText>
      </Style.TodoListItem>
      <Style.TodoListItem>
        <input type="checkbox" />
        <Style.TodoText>Finish sprint for personal project</Style.TodoText>
      </Style.TodoListItem>
      <Style.TodoListItem>
        <input type="checkbox" />
        <Style.TodoText>Finish sprint for personal project</Style.TodoText>
      </Style.TodoListItem>
    </Style.TodoList>
    <Style.Input placeholder="New Todo" autoFocus />
  </Style.PaneWrapper>
);

export default Pane;
