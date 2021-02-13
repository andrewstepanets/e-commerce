import React from 'react';
import { Route, Switch } from "react-router-dom";
import HomePage from 'pages/home-page';

function HatsPage() {
  return (
    <div>
      <h1>Hats</h1>
    </div>
  )
}

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={HatsPage} />
        <Route render={() => <h1>Page Not Found</h1>} />
      </Switch>
    </div>
  );
}

export default App;
