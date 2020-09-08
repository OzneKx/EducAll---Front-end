import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  body {
    background: #F88400;
    color: #FFF;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothin: antialised !important;
  }

  body, input, button {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
  }

  button {
    cursor: pointer;
  }
`;
