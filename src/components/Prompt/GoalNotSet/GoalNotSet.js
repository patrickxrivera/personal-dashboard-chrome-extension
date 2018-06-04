import React from 'react';

import * as Style from './GoalNotSetStyles';

const GoalNotSet = ({ goalVal, handleKeyPress, updateGoalVal }) => (
  <div>
    <Style.Heading>What is your goal today?</Style.Heading>
    <Style.Input onKeyPress={handleKeyPress} value={goalVal} onChange={updateGoalVal} />
  </div>
);

export default GoalNotSet;
