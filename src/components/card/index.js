import React from "react";

const card = props => (
  <div>
    <h3>{props.name}</h3>
    <span>{props.tagline}</span>
    <hr/>
  </div>
);

export default card;
