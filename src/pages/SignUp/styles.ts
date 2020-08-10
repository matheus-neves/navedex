import styled from 'styled-components';
import { animateFromBottom } from '../../styles/animations';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-self: center;
  margin: 0 auto;

  width: 100%;
  max-width: 448px;
`;

export const AnimationContainer = styled.div`
  border: 1px solid #212121;

  display: flex;
  flex-direction: column;
  padding: 40px 32px;

  animation: ${animateFromBottom} 1s;

  h1 {
    font-size: 18px;
    margin: 24px 0 16px;
  }

  img {
    height: 60px;
  }

  a {
    display: flex;
    align-items: center;

    font-weight: normal;
    font-size: 14px;
    margin-top: 24px;
    text-align: center;
    color: #424242;

    svg {
      margin-right: 8px;
    }
  }
`;
