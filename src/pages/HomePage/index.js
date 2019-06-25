import React, { useState, useEffect } from "react";
import { bindActionCreators }         from "redux";
import { connect }                    from "react-redux";

import "./style.css";

import { clickInformation } from "services/actions";
import Api                  from "services/api";
import Card                 from "components/card";

const Homepage = ({ payload, clickInformation }) => {
  const [beerList, beerListSet] = useState([]);

  async function fetchData() {
    let response = await Api.get("beers");
    response = response.data;
    beerListSet(response);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="ui-container">
      {payload.open
        : beerList.map((data, index) => {
        return (
          <div key={index}>
                <Card {...data} onClick={() => clickInformation(data)} />
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = state => ({
  payload: state.BeerReducer
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ clickInformation }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Homepage);
