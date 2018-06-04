import React from 'react';

import * as Style from './GoalNotSetStyles';

const GoalNotSet = ({ goalVal, handleInputChange, handleKeyPress }) => (
  <div>
    <Style.Heading>What is your goal today?</Style.Heading>
    <Style.Input onKeyPress={handleKeyPress} value={goalVal} onChange={handleInputChange} />
  </div>
);

export default GoalNotSet;
