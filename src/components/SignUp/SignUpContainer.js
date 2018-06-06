import React, { Component } from 'react';
import { connect } from 'react-redux';

import SignUp from './SignUp';
import { isEnterKey } from '../../utils/helpers';
import { setName } from '../../actions/auth';

class SignUpContainer extends Component {
  state = {
    name: ''
  };

  handleKeyPress = (e) => {
    if (isEnterKey(e)) this.props.setName(e.target.value);
  };

  handleInputChange = (e) => {
    this.setState({ name: e.target.value });
  };

  render() {
    return (
      <SignUp
        handleKeyPress={this.handleKeyPress}
        handleInputChange={this.handleInputChange}
        {...this.state}
        {...this.props.imageData}
      />
    );
  }
}

export default connect(null, { setName })(SignUpContainer);
