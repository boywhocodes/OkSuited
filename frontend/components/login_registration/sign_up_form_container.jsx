import React from 'react';
import { withRouter }  from 'react-router';
import { connect } from 'react-redux';
import SignUpForm from './sign_up_form';
import { logout } from '../../actions/session_actions';
import { requestSignup, receiveErrors } from '../../actions/session_actions';

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.session.errors
});

const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(requestSignup(user)),
  logout: () => dispatch(logout())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpForm));
