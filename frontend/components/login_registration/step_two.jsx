import React from 'react';

const StepTwo = props => (

  <form onSubmit={props.submit} className="step-two-form">
    <ul>{props.errors.map(error => <li>{error}</li> )}</ul>

    <label className="step-two-age">Age</label>
    <input type="text"
      value={props.age}
      onChange={props.update("age")}
      placeholder="e.g. 27"
      className="age-box"/>
    
    <label className="step-two-zip-code">Zip Code</label>

    <input type="text"
      value={props.location}
      onChange={props.update("location")}
      placeholder="97229"
      className="zip-box"/>

    <input type="submit" value="Continue" className="continue-button" />
  </form>
);

export default StepTwo;
