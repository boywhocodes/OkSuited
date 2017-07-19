import React from 'react';

//form for selecting options in dropdown style occuring on index page
const StepOne = props => (
  <form onSubmit={props.submit}>
    <span>
      I am a
    </span>
    <select
      onChange={props.update("eating_speed")}
      value={props.eating_speed}>
      <option value="slow">Leisurely Eater</option>
      <option value="medium">Average Paced Eater</option>
      <option value="fast">Fast Eater</option>
    </select>

    <select
      onChange={props.update("gender")}
      value={props.gender}>
      <option value="female">Female</option>
      <option value="male">Male</option>
      <option value="transgender">Transgender</option>
      <option value="genderfluid">Genderfluid</option>
      <option value="notspecified">Not Specified</option>
    </select>
  </form>
)