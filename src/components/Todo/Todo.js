import React from 'react';

import * as Style from './TodoStyles';
import * as get from '../Home/utils/getClassName';
import Pane from './Pane';

const Todo = ({ isHovered, handleTodoTextClick, paneIsActive }) => (
  <Style.Wrapper>
    {paneIsActive && <Pane />}
    <Style.Text onClick={handleTodoTextClick} className={get.bottomWrapperClassName(isHovered)}>
      Todo
    </Style.Text>
  </Style.Wrapper>
);

export default Todo;
