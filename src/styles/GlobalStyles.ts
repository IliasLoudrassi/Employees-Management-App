import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow-x: hidden;
  }

   *, ::before, ::after {
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
    letter-spacing: -0.02em;
    color: red;
    line-height: 1.2;
    word-break: break-word;
    box-sizing: border-box;
  }
`;
