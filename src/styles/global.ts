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

`;
