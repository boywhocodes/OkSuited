import React from 'react';
import EssayDetailContainer from './essay_detail_container';

class Essay extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.profile) {
      return(
        <div className="profile-content">
          <EssayDetailContainer
            detailName="summary"
            detailTitle="Summary Title"

            userInput={ this.props.profile.summary }

            placeHolder="Please provide your food bio"
            updateProfile={ this.props.updateProfile } />
          <EssayDetailContainer
            detailName="friday-grub"
            detailTitle="On a typical Friday night I am eating"

            userInput={ this.props.profile.friday }

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
