import styled from 'styled-components';

import { fadeIn } from '../../utils/animations';

export const ArticlesText = styled.div`
  cursor: pointer;
  &:hover {
    color: #fff;
  }
`;

export const HackerNewsPaneWrapper = styled.div`
  height: auto;
  position: absolute;
  left: 3px;
  top: 8%;
  width: 350px;
  background: rgba(15, 15, 15, 0.925);
  text-align: left;
  text-shadow: none;
  border-radius: 3px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  animation: 90ms ${fadeIn} ease-in forwards;
`;

export const ProductHuntPaneWrapper = styled.div`
  height: auto;
  position: absolute;
  right: 3px;
  top: 8%;
  width: 350px;
  background: rgba(15, 15, 15, 0.925);
  text-align: left;
  text-shadow: none;
  border-radius: 3px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  animation: 90ms ${fadeIn} ease-in forwards;
`;

export const ArticlesList = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
`;

export const ArticleListItem = styled.div`
  height: auto;
  background-color: #fff;
  margin: 10px 0;
  display: flex;
  color: rgb(66, 66, 65);
  padding: 6px;
  border-radius: 2px;
`;

export const Count = styled.div`
  height: 40px;
`;

export const Square = styled.div`
  height: 20px;
  width: 20px;
  margin-right: 6px;
  background-color: #ff4000;
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CountText = styled.div`
  color: #fff;
  font-weight: 500;
  font-size: 14px;
`;

export const Text = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, 'Apple Color Emoji', Arial,
    sans-serif, 'Segoe UI Emoji', 'Segoe UI Symbol';
`;
export const Title = styled.div``;

export const Comments = styled.div`
  font-size: 12px;
  opacity: 0.6;
  margin-top: 2px;
`;

export const Link = styled.a`
  color: rgb(66, 66, 65);
  text-decoration: none;
`;
