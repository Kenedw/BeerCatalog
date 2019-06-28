import React from "react";

import "./style.sass";

const card = props => (
  <section className="c-card container" onClick={props.onClick}>
    <div className="c-card__item c-card__image">
      <img src={props.image_url} className="c-card__image" alt="Card Image" />
    </div>
    <hr />
    <div className="c-card__item">
      <h2 className="c-card__title">{props.name}</h2>
      <span className="c-card__intro">{props.tagline}</span>
    </div>
  </section>
);

export default card;
