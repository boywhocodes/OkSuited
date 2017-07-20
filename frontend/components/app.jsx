
import React from 'react';
import { connect } from 'react-redux';
import SplashPageContainer from './login_registration/splash_page_container';
import SignUpFormContainer from './login_registration/sign_up_form_container';
import ProfileContainer from './profile/profile_container';

import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';


const App = () => {

const _ensureLoggedIn = (nextState, replace) => {
  const currentUser = store.getState().session.currentUser;
  if (!currentUser) {
    replace('/signup');
  }
};

const _redirectIfLoggedIn = (nextState, replace) => {
  const currentUser = store.getState().session.currentUser;
  if (currentUser) {
    replace('/');
  }
};

  return (
  <div>
    <header>

    </header>
    <Route path="/" component={ProfileContainer} />


  </div>
);
};



export default App;

// { children }
// const mapStateToProps = state => ({
//
// });
//
// export default connect(
//   mapStateToProps
// )(App);
