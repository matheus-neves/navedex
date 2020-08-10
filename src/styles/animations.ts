import { keyframes } from 'styled-components';

export const animateFromBottom = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px)
  }
  to {
    opacity: 1;
    transform: translateY(0)
  }
`;

export const rotate = keyframes`
  from {
    transform: rotate(0deg)
  }
  to {
    transform: rotate(360deg)
  }
`;
