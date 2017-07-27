
import React from 'react';
import { connect } from 'react-redux';
import { IndexRoute } from 'react-router';
// import UserIndexContainer from './user/user_index_container';
import SplashPageContainer from './login_registration/splash_page_container';
import SignUpFormContainer from './login_registration/sign_up_form_container';
import ProfileContainer from './profile/profile_container';
import NavbarContainer from './navigation/nav_bar_container';
// import UserIndexContainer from './user/user_index_container';

import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';


const App = ({store}) => {

// const _ensureLoggedIn = (nextState, replace) => {
//   const currentUser = store.getState().session.currentUser;
//   if (!currentUser) {
//     replace('/signup');
//   }
// };
//
// const _redirectIfLoggedIn = (nextState, replace) => {
//   const currentUser = store.getState().session.currentUser;
//   if (currentUser) {
//     replace('/profile/:userId');
//   }
// };
  const behind = store.getState().session.currentUser ? "behind-everything" : "behind-everything logged-out"
  return (
    <div>

    <header>
      <NavbarContainer />
    </header>

    <div className={behind}>

      <Route exact path="/profile/:userId" component={ProfileContainer} />
    <Route exact path="/" component={SplashPageContainer} />
  </div>

</div>

);
};



export default App;
