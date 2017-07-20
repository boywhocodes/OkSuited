import React from 'react';
import EssayDetail from './essay_detail';

class Essay extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    it (this.props.profile) {
      return(
        <div className="profile-content">
          <EssayDetail
            detailName="summary"
            detailTitle="Summary Title"
            currentUser={ this.props.currentUser }
            userInput={ this.props.profile.summary }
            profile={ this.props.profile }
            placeHolder="Please provide your food bio"
            updateProfile={ this.props.updateProfile } />
          <EssayDetail
            detailName="friday-grub"
            detailTitle="On a typical Friday night I am eating"
            currentUser={ this.props.currentUser }
            userInput={ this.props.profile.friday }
            profile={ this.props.profile }
            placeHolder="Late night tacos or five star cuisine"
            updateProfile={ this.props.updateProfile } />
        </div>
      );
    } else {
      return <div></div>
    }
  }
}

export default Essay;
