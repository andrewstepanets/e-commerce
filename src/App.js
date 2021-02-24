import React, { useEffect } from 'react';
import { Route, Switch } from "react-router-dom";
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { connect } from 'react-redux';

import Header from './components/header';

import HomePage from './pages/home-page';
import ShopPage from './pages/shop-page';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up-page';

// import { useGoogleUser } from './firebase/hooks';

import { setCurrentUser } from './redux/user/user.actions';



class App extends React.Component {

  unsubscribeFromAuth = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
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


}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);
