import React from 'react';

import * as Style from './TodoStyles';
import * as get from '../Home/utils/getClassName';
import TodoPane from './TodoPane';

const Todo = ({ isHovered, togglePaneState, paneIsActive, ...rest }) => (
  <Style.Wrapper>
    {paneIsActive && <TodoPane {...rest} />}
    <Style.Text onClick={togglePaneState} className={get.bottomWrapperClassName(isHovered)}>
      Todo
    </Style.Text>
  </Style.Wrapper>
);

export default Todo;
