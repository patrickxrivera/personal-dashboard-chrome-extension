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
  margin-left: 1.8rem;
  margin-right: 1.8rem;
  color: ${({ isCheckedOff }) => (isCheckedOff ? 'rgba(255,255,255,0.7)' : '#fff')};
`;

export const GoalWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const GoalActionWrapper = styled.div`
  margin-top: 8px;
  border: 1px solid transparent;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
    border: 1px solid rgba(255, 255, 255, 0.7);
    transition: 150ms ease;
  }
`;

export const GoalAction = styled.div`
  margin-left: 7.5px;
  color: ${({ isCheckedOff }) => (isCheckedOff ? 'rgba(255,255,255,0.7)' : '#fff')};
  &:hover {
    transform: scale(1.2);
    margin-left: ${({ isCheckedOff }) => (isCheckedOff ? '7.9px' : '8.5px')};
  }
`;
