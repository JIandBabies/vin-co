import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  html, body {
    color:#27397d;
  }

  body {
    width: 100vw;
    height: 100vh;
    background-color: #fff;
    overflow-x: hidden;
  }

  svg { 
    color:#27397d;
    /* font-size: 1rem; */
  }

  button {
    padding: 0;
    background-color: transparent;
    outline: none;
    border: none;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color:#27397d

  }

  a:active {
    color:#27397d
  }

`;

export default GlobalStyle;
