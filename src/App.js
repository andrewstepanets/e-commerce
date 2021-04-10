import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from './redux/user/user.selectors'
import { checkUserSession } from './redux/user/user.actions'

import Header from './components/header/header.component';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop-page';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up-page';
import CheckoutPage from './pages/checkout/checkout.component';

import GlobalStyles from './styles/global.styles';





function App({ checkUserSession, currentUser }) {

  useEffect(() => {
    checkUserSession()
  }, [checkUserSession])


  return (
    <div>
      <GlobalStyles />
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/checkout' component={CheckoutPage} />
        <Route
          exact
          path='/signin'
          render={() => currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage />)} />
        {/* <Route render={() => <h1>Page Not Found</h1>} /> */}
      </Switch>
    </div>
  );
}


const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})


const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
