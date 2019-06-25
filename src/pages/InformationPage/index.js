import React from "react";
import { connect } from "react-redux";

import "./style.css";

const InformationPage = ({payload}) => {
  const data = payload.dataCard;
  return (
    <div className="infopage">
      <h1>Informations of {data.name}</h1>
      <ul>
        <li>tagline: {data.tagline}</li>
        <li>description: {data.description}</li>
        <li><img src={data.image_url} alt="Card Image" /></li>
      </ul>
    </div>
  );
};

const mapStateToProps = state => ({
  payload: state.BeerReducer
});

export default connect(mapStateToProps)(InformationPage);
