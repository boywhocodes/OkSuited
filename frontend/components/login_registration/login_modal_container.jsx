import React from 'react';
import { connect } from 'react-redux';
import LogInModal from './login_modal';
import { requestLogin } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.session.errors,
  modal: state.modal.login
});

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(requestLogin(user)),
  openLogInModal: () => dispatch(openModal("login")),
  closeLogInModal: () => dispatch(closeModal("login"))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogInModal);
