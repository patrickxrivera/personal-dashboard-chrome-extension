import styled from 'styled-components';
import { Twitter } from 'react-feather';

import { fadeIn } from '../../utils/animations';

export const BackgroundImg = styled.img`
  z-index: -1;
  position: absolute;
  height: 100vh;
  width: 100vw;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  padding-right: 20px;
  height: 101vh;
  background: linear-gradient(rgba(1, 1, 1, 0.1), rgba(1, 1, 1, 0.1));
  justify-content: space-between;
  animation: 80ms ${fadeIn} ease-in forwards;
`;

export const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 1.5rem;
`;

export const MiddleWrapper = styled.div`
  flex: 1;
  color: #fff;
  display: flex;
  justify-content: center;
`;

export const GreetingWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Middle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 10%;
`;

export const Time = styled.div`
  font-weight: 500;
  font-size: 10rem;
`;

export const Greeting = styled.div`
  font-weight: 500;
  font-size: 3.4rem;
  margin-top: -1.5rem;
  text-align: center;
`;

export const BottomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: 100px;
`;

export const QuoteWrapper = styled.div`
  flex: 1;
  text-align: center;
  font-weight: 100;
  padding-bottom: 0.8rem;
  letter-spacing: 1px;
  color: rgba(255, 255, 255, 0.9);
`;

export const Quote = styled.div`
  font-weight: 100;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 300ms ease;
  font-size: 18px;
`;

export const QuoteBottom = styled.div`
  display: flex;
  justify-content: center;
  font-style: normal;
  align-items: center;
  margin-top: -30px;
  font-size: 16px;
  transition: all 300ms ease;
`;

export const QuoteAuthor = styled.div`
  text-align: center;
  margin-right: 7px;
`;

export const TwitterIcon = styled(Twitter)`
  width: 14px;
  height: 14px;
  stroke-width: 1;
  fill: rgba(255, 255, 255, 0.7);
  color: rgba(255, 255, 255, 0.7);
  padding-top: 2px;
`;

export const link = {
  textDecoration: 'none',
  color: 'rgba(255,255,255,0.7)'
};

export const ImgLocation = styled.div`
  font-weight: 300;
  min-width: 15%;
  font-size: 16px;
`;

export const Todo = styled.div`
  min-width: 15%;
  text-align: right;
`;

export const TweetsWrapper = styled.div``;
