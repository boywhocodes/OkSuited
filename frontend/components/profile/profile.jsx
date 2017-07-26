import React from 'react';
import { Link, withRouter } from 'react-router';
import EssayContainer from './essay_container';
import {updateProfile} from '../../actions/profile_actions';
import TabsContainer from '../tabs/tabs_container';
import QuestionsContainer from '../question/questions_container';


class Profile extends React.Component {
  constructor(props) {
    super(props);

    let image_url;
    if (props.profile) {
      image_url = props.profile.image_url

    }
    this.state = {
      image_url
    };

    this.cloudinate = this.cloudinate.bind(this);
    this.profilePic.bind(this);
  }

  componentDidMount() {
    this.props.fetchCurrentProfile().then(() => {
      this.props.fetchResponses(this.props.profile.id);
      this.setState({ image_url: this.props.profile.image_url }, () => console.log(this.state, "stae"));
    });
    this.props.fetchQuestions();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.userId !== nextProps.match.params.userId) {
      nextProps.fetchCurrentProfile(nextProps.match.params.userId).then(() => {this.setState({ image_url: this.props.profile.image_url});
      nextProps.fetchResponses(nextProps.profile.id)});
    }
  }

  cloudinate(e) {
    e.preventDefault();

    cloudinary.openUploadWidget(
      {
        cloud_name: 'boywhocodes',
        upload_preset: 'obbdgqca',
        theme: 'minimal'
      },
      (errors, imageInfo) => {
        if (errors === null) {
          let cloud_url = imageInfo[0].url;
          this.setState({
            image_url: cloud_url
          });
          const user = this.props.profile;
          console.log(user, "lojih");
          user.image_url = cloud_url
          this.props.updateProfile({ user });
        }
      }
    );
  }

  profilePic() {
    if (this.props.currentUser.id === this.props.profile.id) {
      return (
        <div>
          <img className="profile-pic" src={this.state.image_url} ></img>
          <button className="update-image-button" onClick={this.cloudinate}>Upload Image</button>
        </div>
      );
    } else {
      return (
        <img className="profile-pic-non-user" src={this.props.profile.image_url}></img>
      );
    }
  }

  render() {

    if (!this.props.profile || !this.props.currentUser) {
      return <div></div>
    } else {
      return(
        <main className="profile-main">
          <div className="profile-header">
            <div className="inner-header-group">
              <div className="user-info-group">
                <div className="user-pic">
                  {this.profilePic()}
                </div>
                <div className="user-basics-group">
                  <h2 className="user-name">
                    {this.props.profile.username}
                  </h2>
                  </div>
                </div>

                <div className="user-details">
                  <span className="user-dete-age">Age: {this.props.profile.age}</span>
                  <span className="user-dete-speed">Eating Speed: {this.props.profile.eating_speed}</span>
                  <span className="user-dete-gen">Gender: {this.props.profile.gender}</span>
                  <span className="user-dete-loc">Location: {this.props.profile.location}</span>


              </div>
            </div>
          </div>

          <TabsContainer
            tabs={ [ <EssayContainer />, <QuestionsContainer /> ] }
            tabNames={ ["Culinary Compendium", "Questions"] }
            styling="profile-tabs"
            className="tabs-box"/>
        </main>
      );
    }
  }
}

export default withRouter(Profile);
