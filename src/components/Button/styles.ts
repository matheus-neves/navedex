import styled from 'styled-components';

export const Container = styled.button`
  background: #212121;
  height: 40px;
  border: 0;
  padding: 0 16px;
  color: #fff;
  width: 100%;
  font-weight: 600;
  margin-top: 32px;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;
