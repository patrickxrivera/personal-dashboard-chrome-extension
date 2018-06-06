import React from 'react';

import { BackgroundImg } from '../Home/HomeStyles';
import { Wrapper, InputWrapper, Heading, Input } from './SignUpStyles';

const SignUp = ({ src, handleKeyPress, handleInputChange, name }) => (
  <Wrapper>
    <BackgroundImg src={src} />
    <InputWrapper>
      <Heading>Hello, what's your name?</Heading>
      <Input onKeyPress={handleKeyPress} onChange={handleInputChange} val={name} autoFocus={true} />
    </InputWrapper>
  </Wrapper>
);

export default SignUp;
