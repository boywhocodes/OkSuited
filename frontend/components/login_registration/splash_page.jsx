import React from 'react';
import InitialRegistrationContainer from './initial_reg_container';
import { withRouter } from 'react-router';
import LogInModalContainer from './login_modal_container';
import LogInModal from './login_modal';
import Modal from 'react-modal';
import ModalStyle from './modal_style';

class SplashPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      modalIsOpen: false
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleGuest = this.handleGuest.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

  }

  handleClick(e) {
    e.preventDefault();
    this.openModal(true);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  handleGuest(e) {
    e.preventDefault();

    this.props.login({ username: "illjavanotherbug", password: "password"}).then(ser => {
      this.props.router.push('/');
    });
  }

  render() {
    return (
      <div>
        <Modal
          isOpen={this.state.modalIsOpen}
          contentLabel="modal"
          onRequestClose={this.closeModal}
          style={ModalStyle}>
          <LogInModalContainer />
        </Modal>
        <div className="background-group">
          <div className="splash-header-group">
            <div className="signin-header">
              {"Have an account?"}
              <button className="login-button" onClick={this.handleClick} >
                Log In
              </button>
              <button className="demo-login" onClick={this.handleGuest} >
                Demo Login
              </button>
            </div>
            <h1 className="main-logo">OkSuited</h1>
          </div>
          <div className="splash-bottom">
            <div className="tagline">
              Find a lunch mate for your next lunch break
            </div>
            <InitialRegistrationContainer />
          </div>
        </div>
      <div className="bottom-section-group">
        <div className="image-container-group">
          <div className="image-box">
            <img src="" ></img>
            <p>
              {""}
            </p>
          </div>
          <div className="image-box">
            <img src="" ></img>
            <p>
              {""}
            </p>
          </div>
          <div className="image-box">
            <img src="" ></img>
            <p>
              {""}
            </p>
          </div>
        </div>
        </div>
        <footer className="footer-group">
          <p className="footer-styling">
            {"© OkSuited - Eat Lunch, Make New Friends"}
          </p>
        </footer>
      </div>
    );
  }
}

export default withRouter(SplashPage);
