import React from 'react';

import * as Style from './TodoStyles';
import * as get from '../Home/utils/getClassName';
import Pane from './Pane';

const Todo = ({ isHovered, togglePaneState, paneIsActive, ...rest }) => (
  <Style.Wrapper>
    {paneIsActive && <Pane {...rest} />}
    <Style.Text onClick={togglePaneState} className={get.bottomWrapperClassName(isHovered)}>
      Todo
    </Style.Text>
  </Style.Wrapper>
);

export default Todo;
