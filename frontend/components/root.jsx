import React from 'react';
import { Provider } from 'react-redux';

import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { HashRouter } from 'react-router-dom';

import App from './app';
// import InitialRegistration from './login_registration/init_registration';
// import SplashPageContainer from './login_registration/splash_page_container';



const Root = ({ store }) => {
  // const _ensureLoggedIn = (nextState, replace) => {
  //   const currentUser = store.getState().session.currentUser;
  //   if (!currentUser) {
  //     replace('/signup');
  //   }
  // }
  //
  // const _redirectIfLoggedIn = (nextState, replace) => {
  //   const currentUser = store.getState().session.currentUser;
  //   if (currentUser) {
  //     replace('/');
  //   }
  // };

  return (
    <Provider store={ store }>
      <HashRouter>
        <App store={store} />
      </HashRouter>
    </Provider>
  )
};

export default Root;
