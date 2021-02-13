import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from 'styles/global.styles';
import App from 'App';

import 'normalize.css';

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <GlobalStyles />
      <App />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);


