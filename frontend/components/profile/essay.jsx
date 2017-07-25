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
            detailTitle="Brief Summary:"
            userInput={ this.props.profile.summary }
            placeHolder="Please provide your food bio"
            updateProfile={ this.props.updateProfile } />
          <EssayDetailContainer
            detailName="five_foods"
            detailTitle="My five foods that I couldn't live without"
            userInput={ this.props.profile.five_foods }
            placeHolder="Please provide your food bio"
            updateProfile={ this.props.updateProfile } />
          <EssayDetailContainer
            detailName="three_faves"
            detailTitle="3 Favorites: Coffe Shop, Bar, Restaurant"
            userInput={ this.props.profile.three_faves }
            placeHolder="a/A Kitchen, Missouri Lounge, Taco Bell"
            updateProfile={ this.props.updateProfile } />
          <EssayDetailContainer
            detailName="daytime"
            detailTitle="By day I spend my time"
            userInput={ this.props.profile.daytime}
            placeHolder="Solving problems as a software dev"
            updateProfile={ this.props.updateProfile } />
          <EssayDetailContainer
            detailName="hobbies"
            detailTitle="My hobbies include"
            userInput={ this.props.profile.hobbies }
            placeHolder="Salsa dancing & building model cars"
            updateProfile={ this.props.updateProfile } />
          <EssayDetailContainer
            detailName="friday-grub"
            detailTitle="On a typical Friday night I am eating"
            userInput={ this.props.profile.friday }
            placeHolder="Late night tacos or five star cuisine"
            updateProfile={ this.props.updateProfile } />
          <EssayDetailContainer
            detailName="mess_if"
            detailTitle="You should message me if"
            userInput={ this.props.profile.message_if }
            placeHolder="You wanna have the best monday lunch ever"
            updateProfile={ this.props.updateProfile } />
        </div>
      );
    } else {
      return <div></div>
    }
  }
}

export default Essay;
