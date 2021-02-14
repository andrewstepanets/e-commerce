import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

body {
    margin: 0;
    font-family: 'Open Sans Condensed', sans-serif;
    padding: 20px 60px;
}

.homepage {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 80px;
}
  
`;


export default GlobalStyles;