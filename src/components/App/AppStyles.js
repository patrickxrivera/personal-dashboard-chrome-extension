import styled, { injectGlobal } from 'styled-components';

export const AppStyles = injectGlobal`
  html, body {
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
`;

export const Wrapper = styled.div`
  color: rgba(255, 255, 255, 0.7);
  fill: currentcolor;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, 'Apple Color Emoji', Arial,
    sans-serif, 'Segoe UI Emoji', 'Segoe UI Symbol';
  line-height: 1.35;
`;
