import React, { Component } from 'react';
import { withRouter } from 'react-router';
import UserIndexItem from './user_index_item';

class UserIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      distance = 0 
    };
    this.display = this.display.bind(this);
    this.sortedUsers = this.sortedUsers.bind(this);
    this.userIndexItems = this.userIndexItems.bind(this);

    this.preferences = this.preferences.bind(this);
    this.distanceOptions = this.distanceOptions.bind(this);
    this.handleDistance = this.handleDistance.bind(this);
    this.findMatchPercentage = this.findMatchPercentage.bind(this);
    this.calculateQuestionImportance = this.calculateQuestionImportance.bind(this);
    this.calculateQuestionScore = this.calculateQuestionScore.bind(this);
  }


  componentDidMount() {
    this.props.fetchUsers(this.state.distance);
    this.setState({ distance: 3000 });
    this.props.fetchQuestions();
  }



  preferences() {
    let eating_partner;

    if (this.props.currentUser.eating_speed === "slow" && this.props.currentUser.gender === "male") {
      eating_partner = "slow-eating-male";
    } else if (this.props.currentUser.eating_speed === "slow" && this.props.currentUser.gender === "female") {
      eating_partner = "slow-eating-female";
    } else if (this.props.currentUser.eating_speed === "medium" && this.props.currentUser.gender === "male") {
      eating_partner = "medium-eating-male";
    } else if (this.props.currentUser.eating_speed === "medium" && this.props.currentUser.gender === "female") {
      eating_partner = "medium-eating-female";
    } else if (this.props.currentUser.eating_speed === "fast" && this.props.currentUser.gender === "male") {
      eating_partner = "fast-eating-male";
    } else if (this.props.currentUser.eating_speed === "fast" && this.props.currentUser.gender === "female") {
      eating_partner = "fast-eating-female";
    }



    return (
      <div className="preferences-bar">
        <p className="browse-large">Searching for <u>{eating_partner}</u> seeking <u>{eating_partner}</u> within {this.distanceOptions()} miles from you.</p>
      </div>
    );

  }

  sortedUsers() {
    return Object.keys(this.props.users).map(user => {
      const matchPercentage = this.findMatchPercentage(this.props.users[user]);
      return { user, matchPercentage };
    }).filter(user =>
      this.Preference(user)
    );
  }

  handleDistance(e) {
    this.props.fetchUsers(parseInt(e.currentTarget.value));
    this.setState({ distance: parseInt(e.currentTarget.value) });
  }

  userIndexItems() {
    const matches = this.sortedUsers().map(user => {
      return (
        <li key={ user.user }>
          <UserIndexItem
            currentUser={ this.props.currentUser }
            matchPercentage={ user.matchPercentage }
            user={ this.props.users[user.user] } />
        </li>
      );
    });
    return matches;
  }

  findMatchPercentage(user) {
    let currentUserPoints = 0;
    let currentUserQuestionTotal = 0;
    let otherUserPoints = 0;
    let otherUserQuestionTotal = 0;

    const userQuestions = this.props.currentUser.questions.map((question) => {
      return question.id;
    });

    const otherUserQuestions = user.questions.map((question) => {
      return question.id;
    });

    const commonQuestions = Object.keys(this.props.questions).map((question) => {
      if (userQuestions.includes(parseInt(question)) && otherUserQuestions.includes(parseInt(question))) {
        return this.props.questions[question];
      }
    }).filter((question) => question !== undefined);

    if (commonQuestions.length === 0) {
      return 0;
    }

    commonQuestions.forEach((question) => {
      currentUserPoints += this.calculateQuestionScore(question, this.props.currentUser, user);
      currentUserQuestionTotal += this.calculateQuestionImportance(question, this.props.currentUser);
      otherUserPoints += this.calculateQuestionScore(question, user, this.props.currentUser);
      otherUserQuestionTotal += this.calculateQuestionImportance(question, user);
    });

    const currentUserPercent = (currentUserPoints / currentUserQuestionTotal);
    const otherUserPercent = (otherUserPoints / otherUserQuestionTotal);

    const multiplied = currentUserPercent * otherUserPercent;
    const root = commonQuestions.length;
    let matchPercent = Math.floor((Math.sqrt(multiplied) - (1 / (2 * root))) * 100);

    if (matchPercent < 0) {
      matchPercent = 0;
    }
    return matchPercent;
  }

  calculateQuestionImportance(question, user) {
    let questionImportance = 0;
    const choices = question.choices.map((choice) => choice.id);

    user.responses.forEach((response) => {
      if (choices.includes(response.choice_id)) {
        questionImportance = response.importance;
      }
    });

    return questionImportance;
  }

  calculateQuestionScore(question, user, otherUser) {
    const choices = question.choices;
    const choiceIds = question.choices.map((choice) => choice.id);
    let otherUserChoices = null;
    let userAcceptables = null;
    let userImportance = 0;

    choices.forEach((choice) => {
      otherUser.responses.forEach((response) => {
        if (response.choice_id === choice.id) {
          otherUserChoices = choice.body;
        }
      });
    });

    user.responses.forEach((response) => {
      if (choiceIds.includes(response.choice_id)) {
        userAcceptables = response.acceptable_choices;
        userImportance = response.importance;
      }
    });

    if (userAcceptables.includes(otherUserChoices)) {
      return userImportance;
    } else {
      return 0;
    }

  }

  distanceOptions() {
    return (
      <select className="sort-dropdown" onChange={ this.handleDistance }>
        <option value="3000">500+</option>
        <option value="2">2</option>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>
    );
  }

  display() {
    return this.userIndexItems();
  }

  render() {
    if (!this.props.currentUser) {
      return null;
    }

    const { children } = this.props;
    return (
      <div className="browse-main">
        {this.preferences()}
        <div className="user-index-container">
          <ul className="user-index-group">
            {this.display()}
          </ul>
          {children}
        </div>
      </div>
    );
  }
}

export default withRouter(UserIndex);
