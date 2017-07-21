import React from 'react';
import { Link } from 'react-router';
import SignUpFormContainer from './sign_up_form_container';
import StepOne from './step_one';
import StepTwo from './step_two';

//Setting initial state
class InitialRegistration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      registrationStep: 0,
      eating_speed: "slow-eater",
      gender: "male",
      age: "",
      location: ""
    };

    this.handleFirstStep = this.handleFirstStep.bind(this);
    this.handleSecondStep = this.handleSecondStep.bind(this);
    this.update = this.update.bind(this);
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

//Setting State for first step params
  handleFirstStep(e) {
    e.preventDefault();

    this.setState({
      eating_speed: this.state.eating_speed,
      gender: this.state.gender,
      registrationStep: 1
    });
  }

//Setting State for second step params
  handleSecondStep(e) {
    e.preventDefault();
    if (this.state.age >= 100 || this.state.age <= 13 || this.state.location.length >= 6 || this.state.location.length <= 4 ) {
      registrationStep: 1
    } else {
      this.setState({
        age: this.state.age,
        location: this.state.location,
        registrationStep: 2
    })};
  }

  changeStep(e) {
    e.preventDefault();
    this.setState({
      registrationStep: this.state.registrationStep + 1
    });
  }

  render() {
    let currentForm;
    if (this.state.registrationStep === 0) {
      currentForm = (
        <StepOne
          submit={ this.handleFirstStep }
          update={ this.update }
          eating_speed={ this.state.eating_speed }
          gender={ this.state.gender } />
      );
    } else if (this.state.registrationStep === 1) {
      currentForm = (
        <StepTwo
          submit={ this.handleSecondStep }
          update={ this.update }
          age={ this.state.age }
          location={ this.state.location } />
      );
    } else if (this.state.registrationStep === 2) {
      const userInfo = {
        eating_speed: this.state.eating_speed,
        gender: this.state.gender,
        age: this.state.age,
        location: this.state.location
      };
      currentForm = (
        <SignUpFormContainer userInfo={ userInfo } />
      );
    }

    return (
      currentForm
    );
  }
}
export default InitialRegistration;
