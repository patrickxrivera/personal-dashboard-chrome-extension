import styled from 'styled-components';

import { fadeIn } from '../../../utils/animations';

export const Wrapper = styled.div`
  animation: 500ms ${fadeIn} ease-in forwards;
`;

export const Heading = styled.div`
  text-transform: uppercase;
  font-weight: 600;
  font-size: 22px;
  margin-top: 3.8rem;
  text-align: center;
  letter-spacing: 0.5px;
`;

export const Goal = styled.div`
  font-size: 38px;
  text-align: center;
  margin-top: 0.4rem;
  color: ${({ isCheckedOff }) => (isCheckedOff ? 'rgba(255,255,255,0.7)' : '#fff')};
`;

export const GoalWrapper = styled.div`
  display: flex;
  align-items: center;
  min-width: 300px;
  justify-content: space-between;
`;
