import React from 'react';

const StepTwo = props => (
  <form onSubmit={props.submit}>
    <label>Age</label>
    <input type="text"
      value={props.age}
      onChange={props.update("age")}
      placeholder="Age"/>
    <p>{props.age_errors}</p>
    <label>Zip Code</label>
    <input type="text"
      value={props.location}
      onChange={props.update("location")}
      placeholder="97229"/>
    <p>{props.zip_errors}</p>
    <input type="submit" value="Continue" className="continue-button" />
  </form>
);

export default StepTwo;
