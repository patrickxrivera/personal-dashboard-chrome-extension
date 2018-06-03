import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '../Home/Home';
import { Wrapper } from './AppStyles';

const App = ({ playTrack, currentPlaylist }) => (
  <Router>
    <Wrapper>
      <Home />
    </Wrapper>
  </Router>
);

export default App;
