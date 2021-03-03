import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

* {
  box-sizing: border-box;
}

body {
    margin: 0;
    font-family: 'Open Sans Condensed', sans-serif;
    padding: 20px 60px;
}

a {
  text-decoration: none;
  color: black;
}
  
`;


export default GlobalStyles;