import styled, { css } from 'styled-components';

interface ContainerProps {
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  width: 100%;

  & + div {
    margin-top: 32px;
  }

  label {
    font-size: 14px;
    line-height: 18px;
    font-weight: 600;
    margin-bottom: 4px;
  }

  input {
    background: transparent;
    flex: 1;
    color: #212121;
    border-width: 1px;
    border-style: solid;
    border-color: #424242;
    padding: 8px;

    font-size: 16px;
    font-weight: normal;

    &::placeholder {
      color: #9e9e9e;
    }
  }

  ${props =>
    props.isErrored &&
    css`
      input {
        border-color: #c53030;
        color: #c53030;
      }
    `}
`;
