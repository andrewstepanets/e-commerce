import React, { useState, useEffect } from 'react';
import { Route, Switch } from "react-router-dom";
import Header from 'components/header';

import HomePage from 'pages/home-page';
import ShopPage from 'pages/shop-page';
import SignInAndSignUpPage from 'pages/sign-in-and-sign-up-page';

import { auth } from 'firebase/firebase.utils';

function App() {


  const [user, setUser] = useState({
    currentUser: null
  })

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      setUser({ currentUser: user })
    })
  }, [])

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUpPage} />
        {/* <Route render={() => <h1>Page Not Found</h1>} /> */}
      </Switch>
    </div>
  );
}

export default App;
