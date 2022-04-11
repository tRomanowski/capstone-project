import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
    font-family: 'Roboto', sans-serif;
    background-color: #365902;
    color: #DFE2F2;
}
`;

export default GlobalStyles;
