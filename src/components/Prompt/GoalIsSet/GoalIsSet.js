import React from 'react';

import * as Style from './GoalIsSetStyles';

import './style.css';

const GoalIsSet = ({ goalVal, isCheckedOff, handleCheckboxClick }) => (
  <Style.Wrapper>
    <Style.Heading>Today</Style.Heading>
    <Style.GoalWrapper>
      <div className={'checkbox-container ' + (isCheckedOff ? 'checkbox-container__checked' : '')}>
        <input onClick={handleCheckboxClick} type="checkbox" id="rememberMe" />
        <label className="checkbox" htmlFor="rememberMe" />
      </div>
      <Style.Goal isCheckedOff={isCheckedOff}>
        <span className={isCheckedOff ? 'strikethrough-on' : 'strikethrough-off'}>{goalVal}</span>
      </Style.Goal>
      <input type="checkbox" />
    </Style.GoalWrapper>
  </Style.Wrapper>
);

export default GoalIsSet;
