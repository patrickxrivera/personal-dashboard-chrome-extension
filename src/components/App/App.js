import React from 'react';

import HomeContainer from '../Home/HomeContainer';
import SignUpContainer from '../SignUp/SignUpContainer';
import { Wrapper } from './AppStyles';

const App = ({ isAuthenticated, ...rest }) => (
  <Wrapper>{isAuthenticated ? <HomeContainer {...rest} /> : <SignUpContainer {...rest} />}</Wrapper>
);

export default App;
