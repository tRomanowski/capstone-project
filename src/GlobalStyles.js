import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

:root{
  --background-color:#fff;
  --shadow-color: rgba(0,0,0,0.2);
  --primary-color: 	#65a603;
  --secondary-color: hsl(84, 96%, 83%);
  --text-color: #DFE2F2;
  --text-light: #575757;
  --font-size: 16px;
  --animation-speed: 1;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}


body {
    font-family: 'Roboto', sans-serif;
    background-color: var(--background-color);
    color: var(--text-light);
    font-size: var(--font-size);
    min-width: 380px;
    height: 100vh;
}

a {
  text-decoration: none;
}

input:focus {
    outline: none;
  }
`;

export default GlobalStyles;
