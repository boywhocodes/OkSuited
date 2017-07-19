import React from 'react';
import { Link } from 'react-router';

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

  componentDidUpdate() {
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn() {
    if (this.props.loggedIn) {
      this.props.router.push("/");
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
      this.props.router.push(`/profile/${user.currentUser.id}`);
    });
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
      <form onSubmit={ this.handleSubmit }>
        <label>Username</label>
        <input type="text"
          value={this.state.username}
          onChange={this.update("username")}
          placeholder="Username"
          className="step-two-box"
          />
        <p>{this.displayUsername()} {this.props.errors.username}</p>

      <label>Password</label>
      <input type="password"
        value={this.state.password}
        onChange={this.update("password")}
        placeholder="Password"
        className="step-two-box"
        />
      <p>{this.displayPassword()} {this.props.errors.password}</p>
      <input type="submit" value="Start Eating!" className="start-eating-button"/>
      </form>
    );
  }
}

export default SignUpForm;
