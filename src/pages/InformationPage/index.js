import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import "./style.sass";

import { resetBeerStore } from "services/actions";

const InformationPage = ({ payload, resetBeerStore }) => {
  const data = payload.dataCard;
  return (
    <section className="infopage c-card container">
      <a
        onClick={() => resetBeerStore()}
        className="fas fa-angle-left infopage__backButton"
      >
        {" "}
        Back
      </a>
      <div className="c-card__item c-card__image">
        <img src={data.image_url} className="c-card__image" alt="Card Image" />
      </div>
      <div className="c-card__item">
        <h2 className="c-card__title">Informations of {data.name}</h2>
        <p className="c-card__intro">tagline: {data.tagline}</p>
        <p className="c-card__intro">description: {data.description}</p>
      </div>
    </section>
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
