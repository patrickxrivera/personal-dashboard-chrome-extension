import React from 'react';
import ReactLoading from 'react-loading';

import { Wrapper, LoadingWrapper } from './LoadingStyles';

const Loading = ({}) => (
  <Wrapper>
    <LoadingWrapper>
      <ReactLoading delay={0} type={'bubbles'} height={300} width={300} />
    </LoadingWrapper>
  </Wrapper>
);

export default Loading;
