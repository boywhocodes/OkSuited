import React from 'react';
import { Link, withRouter } from 'react-router';
import Modal from 'react-modal';

class LogInModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const user = Object.assign({}, this.state);
    this.props.login(user).then(user => {
      this.setState({ username: "", password: "" });
      this.props.closeLogInModal();
      this.props.history.push(`/profile/${user.id}`)
    });
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  handleClick(e) {
    e.preventDefault();

    this.props.closeLogInModal();
  }

  render() {
    return(
      <div className="modal-background">
        <form className="modal-content" onSubmit={this.handleSubmit} onClick={e=>e.stopPropagation() }>
          <h2 className="login-header">Log In</h2>
          <input type="text"
            value={this.state.username}
            onChange={this.update("username")}
            placeholder="Username"
            className="login-username-box"/>
          <input type="password"
            value={this.state.password}
            onChange={this.update("password")}
            placeholder="Password"
            className="login-password-box"/>
          <p>{this.props.errors}</p>
          <input type="submit" value="Enter Lunch Portal of Greatness" className="login-button"/>
        </form>
      </div>
    );
  }
}

export default withRouter(LogInModal);
