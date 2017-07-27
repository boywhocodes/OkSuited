import React from 'react';

//form for selecting options in dropdown style occuring on index page
const StepOne = props => (
  <form onSubmit={props.submit} className="step-one-form">
    <span className="I-am">
      I am a
    </span>
<div className="all-selects">
  <div className="select-group">
    <span className="select-eat-speed">
      select your eating speed
    </span>

    <span className="select-gender">
      select your gender
    </span>
  </div>
    <div className="buttons">
    <select
      onChange={props.update("eating_speed")}
      value={props.eating_speed}
      className="step-one-buttons-eat-speed">
      <option value="slow">Leisurely Eater</option>
      <option value="medium">Average Paced Eater</option>
      <option value="fast">Fast Eater</option>
    </select>

    <select
      onChange={props.update("gender")}
      value={props.gender}
      className="step-one-buttons-gender">
      <option value="female">Female</option>
      <option value="male">Male</option>
      <option value="transgender">Transgender</option>
      <option value="genderfluid">Genderfluid</option>
      <option value="notspecified">Not Specified</option>
    </select>
    </div>
  </div>
    <h1 className="exclamation">!</h1>
    <div className="continue-button"><input type="submit" value="Continue"  /></div>
  </form>
);

export default StepOne;
