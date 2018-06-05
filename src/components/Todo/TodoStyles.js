import styled from 'styled-components';
import { Trash2 } from 'react-feather';

import { fadeIn } from '../../utils/animations';

export const Wrapper = styled.div`
  min-width: 15%;
`;

export const Text = styled.div`
  text-align: right;
  &:hover {
    color: #fff;
    cursor: pointer;
  }
`;

export const PaneWrapper = styled.div`
  height: auto;
  width: 18%;
  position: absolute;
  right: 3px;
  bottom: 8%;
  width: 290px;
  z-index: 10;
  background: rgba(15, 15, 15, 0.925);
  text-align: left;
  text-shadow: none;
  border-radius: 3px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  animation: 90ms ${fadeIn} ease-in forwards;
`;

export const Heading = styled.div`
  color: #fff;
  font-size: 18px;
`;

export const Body = styled.div`
  text-align: center;
  margin: 30px 0;
  font-size: 15px;
`;

export const Input = styled.input`
  background-color: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.7);
  font-size: 15px;
  &:focus {
    outline: none;
  }
`;

export const TodoList = styled.div`
  margin-top: 2px;
  margin-bottom: 10px;
`;

export const TodoListItem = styled.div`
  margin: 3px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TodoText = styled.span`
  font-size: 15px;
  margin-left: 5px;
  color: #fff;
  opacity: ${({ isChecked }) => (isChecked ? 0.5 : 1)};
  text-decoration: ${({ isChecked }) => (isChecked ? 'line-through' : '')};
`;

export const TrashIcon = styled(Trash2)`
  color: #fff;
  width: 14px;
  height: 14px;
  cursor: pointer;
  animation: 30ms ${fadeIn} ease-in forwards;
`;

export const IconWrapper = styled.div`
  opacity: ${({ isChecked }) => (isChecked ? 0.5 : 1)};
`;
