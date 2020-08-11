import styled from 'styled-components';
import { Form } from '@unform/web';
import { animateFromBottom } from '../../styles/animations';
import { Wrapper } from '../../styles/layout';

export const Container = styled(Wrapper)``;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  width: 100%;
  max-width: 592px;

  animation: ${animateFromBottom} 1s;

  & > div {
    display: flex;
    flex-direction: row;
    margin-bottom: 32px;

    a {
      display: flex;
    }
  }

  strong {
    font-size: 24px;
    line-height: 36px;
    margin-left: 6px;
  }
`;

export const FormNaver = styled(Form)`
  display: flex;
  flex-wrap: wrap;

  padding-bottom: 32px;

  @media (min-width: 768px) {
    > div {
      width: calc(50% - 16px);

      &:nth-child(2n) {
        margin-left: 32px;
      }
    }
    button {
      width: 176px;
      margin-left: auto;
    }
  }
`;

export const ErrorMessage = styled.p`
  font-weight: 600;
  font-size: 12px;
  color: #c53030;
  margin-top: 8px;
  width: 100%;
`;
