import React from 'react';
import { Link } from 'react-router';
import {withRouter} from 'react-router-dom';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.displayUsername = this.displayUsername.bind(this);
    this.displayPassword = this.displayPassword.bind(this);
  }

  // componentDidUpdate() {
  //   this.redirectIfLoggedIn();
  // }

  // redirectIfLoggedIn() {
  //   if (this.props.loggedIn) {
  //     this.props.history.push("/profile");
  //   }
  // }

  componentWillReceiveProps(nextProps) {

    if (nextProps.loggedIn)  {
      debugger
      this.props.history.push(`/profile/${nextProps.user.id}`)
    }
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.userInfo.age = parseInt(this.props.userInfo.age);
    const user = Object.assign(Object.assign({}, this.state), this.props.userInfo);

    this.props.signup(user).then(user => {
      this.setState({ username: "", password: ""});

    });
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  displayUsername() {
    if (this.props.errors.username) {
      return "Username";
    }
  }

  displayPassword() {
    if (this.props.errors.password) {
      return "Password";
    }
  }

  render () {

    return (
      <div className="user-pass-form">
      <form onSubmit={ this.handleSubmit }>
        {this.renderErrors()}
        <label className="u-name">Username</label>
        <input type="text"
          value={this.state.username}
          onChange={this.update("username")}
          placeholder="Username"
          className="sign-up-username-box"
          />


        <label className="p-word">Password</label>
      <input type="password"
        value={this.state.password}
        onChange={this.update("password")}
        placeholder="Password"
        className="sign-up-password-box"
        />
      <input type="submit" value="Start Eating!" className="start-eating-button"/>
      </form>
      </div>

    );
  }
}

export default withRouter(SignUpForm);
