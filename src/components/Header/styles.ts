import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 0;
  margin-bottom: 40px;

  a {
    transition: opacity 0.5s;

    &:hover {
      opacity: 0.8;
    }

    img {
      height: 37px;
    }
  }

  button {
    display: flex;
    align-items: center;
    border: none;
    background: none;

    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    color: #000;

    svg {
      margin-right: 8px;
    }

    transition: opacity 0.5s;

    &:hover {
      opacity: 0.8;
    }
  }
`;
