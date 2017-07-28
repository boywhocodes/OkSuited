import React from 'react';
import InitialRegistrationContainer from './init_registration_container';
import { withRouter } from 'react-router';
import LogInModalContainer from './login_modal_container';
import NavbarContainer from '../navigation/nav_bar_container';
import LogInModal from './login_modal';
import Modal from 'react-modal';
import ModalStyle from './modal_style';
<style>
@import url('https://fonts.googleapis.com/css?family=Bellefair');
</style>

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

    this.props.login({ username: "Bedheadredhead24", password: "123456"}).then(userAction => {
      this.props.history.push(`/profile/${userAction.currentUser.id}`);
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

                              <button className="login-button" onClick={this.handleClick} >
                                Log In
                              </button>
                              <button className="demo-login" onClick={this.handleGuest} >
                                Demo User
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
          <div>

            <p className="image-box-0">
              Needlessly find a new friend/colleague/mentor to share your lunch break with
            </p>
          </div>
          <div>

            <p  className="image-box-1">
              Synchronicity is key
              Search for people depending on whether you're in a time crunch or want to take a leisurely lunch break you can

            </p>
          </div>
          <div>

            <p className="image-box-2">
              Only into Asian?  Cater your cuisine preferences dependingon what you're feeling like eating that day
            </p>
          </div>
        </div>
        <footer className="footer-group">
          <p className="footer-styling">
            "© OkSuited - Eat Lunch, Make New Friends"
          </p>
        </footer>
        </div>
      </div>
    );
  }
}

export default withRouter(SplashPage);
