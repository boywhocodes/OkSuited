import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { requestLogin, requestSignup } from '../../actions/session_actions';
import InitialRegistration from './init_registration';

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.session.errors
});

const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(requestSignup(user))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(InitialRegistration));
