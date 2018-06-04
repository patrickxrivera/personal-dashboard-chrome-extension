import React, { Component } from 'react';
import { connect } from 'react-redux';

import GoalNotSet from './GoalNotSet/GoalNotSet';
import GoalIsSet from './GoalIsSet/GoalIsSet';
import { getGoalIsSet, getGoalVal, getIsCheckedOff } from '../../reducers/prompt';
import { setGoalIsSetToTrue, updateGoalVal, resetGoal, toggleCheckbox } from '../../actions/prompt';

const isEnterKey = ({ key }) => key === 'Enter';

class PromptContainer extends Component {
  state = {
    isMousedOver: false
  };

  handleKeyPress = (e) => {
    if (isEnterKey(e)) this.handleSubmit(e);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.setGoalIsSetToTrue();
  };

  handleMouseOver = () => {
    this.setState({ isMousedOver: true });
  };

  handleMouseLeave = () => {
    this.setState({ isMousedOver: false });
  };

  render() {
    return this.props.goalIsSet ? (
      <GoalIsSet {...this.props} {...this.state} {...this} />
    ) : (
      <GoalNotSet handleKeyPress={this.handleKeyPress} {...this.props} />
    );
  }
}

const mapStateToProps = (state) => ({
  goalIsSet: getGoalIsSet(state),
  goalVal: getGoalVal(state),
  isCheckedOff: getIsCheckedOff(state)
});

export default connect(mapStateToProps, {
  setGoalIsSetToTrue,
  updateGoalVal,
  resetGoal,
  toggleCheckbox
})(PromptContainer);
