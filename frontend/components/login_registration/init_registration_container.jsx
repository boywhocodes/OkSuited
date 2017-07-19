import React from 'react';
import { connect } from 'react-redux';
import { requestLogin, requestSignup } from '../..actions/log_reg_actions';
import InitialRegistration from './initial_reg';

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.session.errors
});

const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(requestSignup(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InitialRegistration);
