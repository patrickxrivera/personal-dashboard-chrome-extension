import React from 'react';

import * as Style from './GoalIsSetStyles';

const GoalIsSet = ({ goalVal }) => (
  <Style.Wrapper>
    <Style.Heading>Today</Style.Heading>
    <Style.Goal>{goalVal}</Style.Goal>
  </Style.Wrapper>
);

export default GoalIsSet;
