import React, { Component } from 'react';
import { withRouter } from 'react-router';

class UserIndexItem extends Component {
  constructor(props) {
    super(props);

  this.handleProfile = this.handleProfile.bind(this);
  this.matchColor = this.matchColor.bind(this);
  }

  handleProfile(e) {
    e.preventDefault();

    this.props.history.push(`/profile/${this.props.user.id}`);
  }

  matchColor() {
    if (this.props.matchPercentage > 60) {
      return " green";
    } else if (this.props.matchPercentage > 40) {
      return " orange";
    } else {
      return " red";
    }
  }

  // handleLike() {
  //   return "green";
  // }

  render() {

    return (
      <div className="browse-wrapper">
        <div className="browse-item">
          <img src={this.props.user.image_url} className="browse-pic" onClick={ this.handleProfile }></img>
          <div className="browse-text">
            <p className="username-text" onClick={ this.handleProfile }>{this.props.user.username}</p>
            <p className="user-browse-info">{this.props.user.age} · {this.props.user.location}</p>
            <p className={"match-percentage" + this.matchColor()}>{this.props.matchPercentage}% Match</p>


          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(UserIndexItem);
