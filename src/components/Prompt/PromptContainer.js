import React, { Component } from 'react';
import { connect } from 'react-redux';

import GoalNotSet from './GoalNotSet/GoalNotSet';
import GoalIsSet from './GoalIsSet/GoalIsSet';
import { getGoalIsSet, getGoalVal } from '../../reducers/prompt';
import { setGoalIsSetToTrue, updateGoalVal } from '../../actions/prompt';

const isEnterKey = ({ key }) => key === 'Enter';

class PromptContainer extends Component {
  state = {
    isCheckedOff: false
  };

  handleCheckboxClick = () => {
    console.log(!this.state.isCheckedOff);

    this.setState({ isCheckedOff: !this.state.isCheckedOff });
  };

  handleInputChange = (e) => {
    this.props.updateGoalVal(e.target.value);
  };

  handleKeyPress = (e) => {
    if (isEnterKey(e)) this.handleSubmit(e);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.setGoalIsSetToTrue();
  };

  render() {
    return this.props.goalIsSet ? (
      <GoalIsSet {...this.props} {...this.state} handleCheckboxClick={this.handleCheckboxClick} />
    ) : (
      <GoalNotSet
        handleInputChange={this.handleInputChange}
        handleKeyPress={this.handleKeyPress}
        {...this.props}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  goalIsSet: getGoalIsSet(state),
  goalVal: getGoalVal(state)
});

export default connect(mapStateToProps, { setGoalIsSetToTrue, updateGoalVal })(PromptContainer);
