import React from 'react';
import { Provider } from 'react-redux';

import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './app';
import InitialRegistration from './login_registration/init_registration';
import SplashPageContainer from './login_registration/splash_page_container';



const Root = ({ store }) => {
  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/signup');
    }
  }

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/');
    }
  };

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={App}>
          
          <Route path="/signup" component={ SplashPageContainer } onEnter={ _redirectIfLoggedIn } />
        </Route>
      </Router>
    </Provider>
  )
};

export default Root;
