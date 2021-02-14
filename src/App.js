import React from 'react';
import { Route, Switch } from "react-router-dom";
import HomePage from 'pages/home-page';
import ShopPage from 'pages/shop-page';


function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        {/* <Route render={() => <h1>Page Not Found</h1>} /> */}
      </Switch>
    </div>
  );
}

export default App;
