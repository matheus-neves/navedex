import styled from 'styled-components';
import { Wrapper } from '../../styles/layout';

export const Container = styled(Wrapper)``;

export const NaversHeader = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 32px;

  button {
    background: #212121;
    color: #fff;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    margin-left: 32px;

    width: 176px;
    height: 40px;

    transition: opacity 0.5s;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const NaversList = styled.ul`
  /* display: flex;
  flex-direction: column;
  flex-wrap: wrap; */

  display: grid;
  width: 100%;
  grid-template-columns: 1fr;
  max-width: 280px;

  margin: 0 auto;

  grid-gap: 32px;

  @media (min-width: 560px) {
    grid-template-columns: 1fr 1fr;
    max-width: 560px;
  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
    max-width: 768px;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    max-width: 1280px;
  }

  img {
    margin: 0 auto;
    margin-bottom: 16px;
    width: 100%;
  }

  strong {
    font-size: 16px;
    line-height: 18px;
  }

  p {
    font-size: 16px;
    line-height: 24px;
  }

  div {
    display: flex;
    align-items: center;
    margin-top: 8px;
  }

  button {
    background: none;
    display: flex;
    + button {
      margin-left: 8px;
    }
  }
`;
