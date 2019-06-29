import React from "react";
import { Link } from "react-router-dom";

import notFoundImg from "assets/image/not-found.jpg";

import "./style.sass";

const NotFound = () => {
  return (
    <div className="notFound">
      <img
        src={notFoundImg}
        className="notFound__image"
        alt="not found Image"
      />
      <strong>
        Please click <Link to="/">Here</Link>
      </strong>
    </div>
  );
};

export default NotFound;
