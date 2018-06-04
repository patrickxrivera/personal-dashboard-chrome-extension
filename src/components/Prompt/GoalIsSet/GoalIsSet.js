import React from 'react';

import * as Style from './GoalIsSetStyles';
import Checkbox from './Checkbox';

import './style.css';

const GoalIsSet = (props) => (
  <Style.Wrapper onMouseOver={props.handleMouseOver} onMouseLeave={props.handleMouseLeave}>
    <Style.Heading>Today</Style.Heading>
    <Style.GoalWrapper>
      <Checkbox {...props} />

      <Style.Goal isCheckedOff={props.isCheckedOff}>
        <span className={props.isCheckedOff ? 'strikethrough-on' : 'strikethrough-off'}>
          {props.goalVal}
        </span>
      </Style.Goal>

      <Style.GoalActionWrapper
        onClick={props.resetGoal}
        className={!props.isMousedOver && !props.isCheckedOff ? 'moused-over' : ''}>
        <Style.GoalAction isCheckedOff={props.isCheckedOff}>
          {props.isCheckedOff ? '+' : 'x'}
        </Style.GoalAction>
      </Style.GoalActionWrapper>
    </Style.GoalWrapper>
  </Style.Wrapper>
);

export default GoalIsSet;
