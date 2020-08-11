import styled, { css } from 'styled-components';

import { rotate } from '../../styles/animations';

interface ButtonProps {
  loading?: boolean;
}

export const Container = styled.button<ButtonProps>`
  background: #212121;
  height: 40px;
  border: 0;
  padding: 0 16px;
  color: #fff;
  width: 100%;
  font-weight: 600;
  transition: opacity 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;

  ${props =>
    props.loading &&
    css`
      opacity: 0.8;
    `}
  svg {
    animation: ${rotate} 1s linear infinite;
  }

  &:hover {
    opacity: 0.8;
  }
`;
