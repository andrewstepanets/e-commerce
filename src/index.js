import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';

import GlobalStyles from 'styles/global.styles';
import App from 'App';

import 'normalize.css';

ReactDOM.render(
  <Provider>
    <BrowserRouter>
      <React.StrictMode>
        <GlobalStyles />
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);


