import React from 'react';
import InitialRegistrationContainer from './init_registration_container';
import { withRouter } from 'react-router';
import LogInModalContainer from './login_modal_container';
import NavbarContainer from '../navigation/nav_bar_container';
import LogInModal from './login_modal';
import Modal from 'react-modal';
import ModalStyle from './modal_style';

class SplashPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleGuest = this.handleGuest.bind(this);


  }

  handleClick(e) {
    e.preventDefault();
    this.props.openLogInModal();
  };


  handleGuest(e) {
    e.preventDefault();

    this.props.login({ username: "54321", password: "123456"}).then(user => {
      this.props.history.push('/profile');
    });
  }

  render() {
    return (
      <div className="everything">
        <Modal
          isOpen={this.props.logInModalOpen}
          contentLabel="modal"
          onRequestClose={this.props.closeLogInModal}
          style={ModalStyle}>
          <LogInModalContainer />
        </Modal>
          <div className="background-group">
                  <div className="splash-header-group" >
                            <div className="signin-header">
                              "Have an account?"
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
              first placeholder
            </p>
          </div>
          <div className="image-box">
            <img src="" ></img>
            <p>
              second placeholder
            </p>
          </div>
          <div className="image-box">
            <img src="" ></img>
            <p>
              last placeholder
            </p>
          </div>
        </div>
        </div>
        <footer className="footer-group">
          <p className="footer-styling">
            "© OkSuited - Eat Lunch, Make New Friends"
          </p>
        </footer>
      </div>
    );
  }
}

export default withRouter(SplashPage);
