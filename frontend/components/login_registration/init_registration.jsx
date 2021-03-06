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
      location: "",
      errors: []
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
    let errors = [];
    if (this.state.age >= 100 || this.state.age <= 13) {
      errors.push("Age must be between 13-100");
    }
      if (this.state.location.length >= 6 || this.state.location.length <= 4 ) {
      errors.push("Please enter proper zipcode");
    }
    if (errors.length === 0) {
      this.setState({
        age: this.state.age,
        location: this.state.location,
        registrationStep: 2,
        errors: []
    }
  )} else {
    this.setState({
      errors  //set of key of errors in state to variable rrros
    })
  };
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
          location={ this.state.location }
        errors={this.state.errors } />
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
