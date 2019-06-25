import React from "react";
import { connect } from "react-redux";

import "./style.css";

function Header({ title }) {
  return (
    <div className="h-card">
      <h1>{title}</h1>
    </div>
  );
}

const mapStateToProps = store => ({
  title: store.BeerReducer.title
});

export default connect(mapStateToProps,null)(Header);
