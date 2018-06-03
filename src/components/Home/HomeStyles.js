import styled from 'styled-components';
import { Twitter } from 'react-feather';

export const BackgroundImg = styled.img`
  z-index: -1;
  position: absolute;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  padding-right: 20px;
  height: 101vh;
  background: linear-gradient(rgba(1, 1, 1, 0.2), rgba(1, 1, 1, 0.5));
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
  align-items: center;
  flex-direction: column;
  padding-top: 8rem;
  padding-top: 13rem;
`;

export const Time = styled.div`
  font-weight: 500;
  font-size: 10rem;
`;

export const Greeting = styled.div`
  font-weight: 500;
  font-size: 3.4rem;
  margin-top: -1.5rem;
`;

export const Prompt = styled.div`
  font-weight: 200;
  font-size: 2.54em;
  margin-top: 3rem;
`;

export const PromptInput = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 2px solid #fff;
  width: 30rem;
  margin-top: 1rem;
  font-size: 2.5rem;
  color: #fff;
  text-align: center;
  &:focus {
    outline: none;
  }
`;

export const BottomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const QuoteWrapper = styled.div`
  width: 60%;
  text-align: center;
  font-weight: 100;
  font-style: italic;
  padding-bottom: 1rem;
`;

export const Quote = styled.div`
  font-weight: 100;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 300ms ease;
`;

export const QuoteBottom = styled.div`
  display: flex;
  justify-content: center;
  font-style: normal;
  align-items: center;
  border: 2px red border;
  margin-top: -30px;
  opacity: 0;
  transition: all 300ms ease;
`;

export const QuoteAuthor = styled.div`
  text-align: center;
  font-size: 14px;
  margin-right: 5px;
`;

export const TwitterIcon = styled(Twitter)`
  width: 14px;
  height: 14px;
  stroke-width: 1;
  fill: rgba(255, 255, 255, 0.7);
  color: rgba(255, 255, 255, 0.7);
`;

export const Settings = styled.div``;
export const Todo = styled.div``;
export const ArticlesWrapper = styled.div``;
export const TweetsWrapper = styled.div``;
