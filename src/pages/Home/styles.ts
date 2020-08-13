import styled from 'styled-components';

import { TransitionGroup } from 'react-transition-group';
import { Wrapper } from '../../styles/layout';
import { rotate } from '../../styles/animations';

interface NaverItemProps {
  state: string;
}

export const Container = styled(Wrapper)``;

export const NaversHeader = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 32px;

  a {
    display: flex;
    background: #212121;
    color: #fff;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    margin-left: 32px;
    justify-content: center;
    align-items: center;

    width: 176px;
    height: 40px;

    transition: opacity 0.5s;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const LoaderContainer = styled.div`
  animation: ${rotate} 1s linear infinite;
  width: 40px;
  height: 40px;
  margin: 0 auto;
`;

export const NaversList = styled(TransitionGroup).attrs({
  component: 'ul',
})`
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

export const NaverItem = styled.li<NaverItemProps>`
  transition: opacity, transform, 0.6s cubic-bezier(0.5, 1, 0.89, 1);
  opacity: ${({ state }) => (state === 'entered' ? 1 : 0)};
  transform: translateY(${({ state }) => (state === 'entered' ? 0 : 150)}px);

  img {
    box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0);
    transition: box-shadow 0.4s;
    cursor: pointer;
  }

  &:hover {
    img {
      box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.45);
    }
  }
`;
