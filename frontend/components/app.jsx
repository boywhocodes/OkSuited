
import React from 'react';
import { connect } from 'react-redux';
import SplashPageContainer from './login_registration/splash_page_container';
import SignUpFormContainer from './login_registration/sign_up_form_container';

import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';


const App = () => {
  return (
  <div>
    <header>
      <h1>OkSuited</h1>
    </header>
    <Route path="/" component={SplashPageContainer} />


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
