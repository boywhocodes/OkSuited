
import React from 'react';
import { connect } from 'react-redux';

import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';


const App = ({ children }) => {
  return (
  <div>
    { children }
  </div>
);
}

const mapStateToProps = state => ({

});


export default connect(
  mapStateToProps
)(App);
