import React from "react";

import "./style.sass";

const card = props => (
  <section className="c-card container row" onClick={props.onClick}>
    <div className="c-card__item c-card__image">
      <img src={props.image_url} className="c-card__image" alt="Card Image" />
    </div>

    <div className="c-card__item">
      <h2 className="c-card__title">{props.name}</h2>
      <p className="c-card__intro">{props.tagline}</p>
    </div>
  </section>
);

export default card;
