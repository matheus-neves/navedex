import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #fff;
    color: #212121;
    -webkit-font-smoothing: antialiased;
  }

  #root {
    display: flex;
    min-height: 100vh;
  }

  body, input, button {
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
    border: 0;
  }

  a {
    text-decoration: none;
  }

  .ReactModal__Overlay {
    opacity: 0;
    transition: all 0.2s ease-in-out;
  }

  .ReactModal__Overlay--after-open {
    opacity: 1;
  }

  .ReactModal__Overlay--before-close {
    opacity: 0;
  }

  .ReactModal__Content {

    h2 {
      display: block;
      font-size: 24px;
      line-height: 36px;
    }

    & > h2 {
      margin-bottom: 24px;
    }

    p {
      font-size: 16px;
      line-height: 36px;
      font-weight: normal;
    }

  }


`;
