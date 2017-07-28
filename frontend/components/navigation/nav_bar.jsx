import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { requestLogout } from '../../actions/session_actions';



class Navbar extends React.Component {
  constructor(props) {
    super(props)

    this.handleLogOut = this.handleLogOut.bind(this);
  }

  handleLogOut(e) {
    e.preventDefault();

    this.props.logout().then(() => this.props.history.push("/"));
  }

  render() {
    if(!this.props.currentUser) {
      return <div></div>
    } else {
      return(
        <nav className="nav-bar">
          <div>
            <div className="nav-logo-class">
            <h1 className="nav-logo">
              <Link to="/profile">OkS</Link>
            </h1>
            </div>
            <ul className="nav-left">
              <li className="nav-left-link">
                <Link to="/profile">Find Matches</Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className="nav-right">
              <li className="nav-right-link">
                <a href={"#/profile/"+this.props.currentUser.id}>
                  <img src={this.props.currentUser.image_url} className="nav-profile-pic"/>
                </a>
              </li>
              <div className="nav-logout-class">
              <li className="nav-logout-link">
                <button onClick={this.handleLogOut}>Log Out</button>
              </li>
              </div>
            </ul>
          </div>
        </nav>
      );
    }
  }
}

export default withRouter(Navbar);
