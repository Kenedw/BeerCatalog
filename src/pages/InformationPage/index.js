import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import "./style.css";

import { resetBeerStore } from "services/actions";

const InformationPage = ({ payload, resetBeerStore }) => {
  const data = payload.dataCard;
  return (
    <div className="infopage">
      <a
        onClick={() => resetBeerStore()}
        className="fas fa-angle-left backButton icon-left"
      >
        Back
      </a>
      <h1>Informations of {data.name}</h1>
      <ul>
        <li>tagline: {data.tagline}</li>
        <li>description: {data.description}</li>
        <li>
          <img src={data.image_url} alt="Card Image" />
        </li>
      </ul>
    </div>
  );
};

const mapStateToProps = state => ({
  payload: state.BeerReducer
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ resetBeerStore }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InformationPage);
