import React from 'react';
import { connect } from 'react-redux';
import SplashPage from './splash_page';
import { openModal, closeModal } from '../../actions/modal_actions';
import { requestLogin } from '../../actions/session_actions';

const mapStateToProps = state => ({
  logInModalOpen: state.modal.login
});

const mapDispatchToProps = dispatch => ({
  openLogInModal: () => dispatch(openModal("login")),
  closeLogInModal: () => dispatch(closeModal("login")),
  login: user => dispatch(requestLogin(user))
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(SplashPage);
