import styled from 'styled-components';

export const Wrapper = styled.div`
  background: linear-gradient(rgba(1, 1, 1, 0.5), rgba(1, 1, 1, 0.5));
  height: 100vh;
  width: 100vw;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Heading = styled.div`
  color: #fff;
  font-size: 3rem;
  margin-top: 19rem;
`;

export const Input = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 2px solid #fff;
  width: 30rem;
  margin-top: 1rem;
  font-size: 3rem;
  color: #fff;
  text-align: center;
  &:focus {
    outline: none;
  }
`;
