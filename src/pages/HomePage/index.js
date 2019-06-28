import React, { useState, useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import "./style.sass";
import imageMoreBeer from "assets/image/more-beer.jpg";

import { clickInformation } from "store/actions";
import Api from "services/api";
import Card from "components/card";
import InformationPage from "pages/InformationPage";

const Homepage = ({ payload, clickInformation }) => {
  const [beerList, beerListSet] = useState([]);
  const [pageCount, pageCountIncrement] = useState(1);

  async function fetchData(page = 1) {
    let response = await Api.get(
      `https://api.punkapi.com/v2/beers?page=${page}`
    );
    response = response.data;
    if (beerList.length) {
      response = beerList.concat(response); //always add in front for a pagination
    }
    beerListSet(response);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const NextButton = props => {
    function onClick() {
      props.onClick();
      fetchData(pageCount);
    }

    return (
      <Card
        image_url={imageMoreBeer}
        name="Click for more beer"
        onClick={onClick}
      />
    );
  };

  return (
    <div className="ui-container">
      {payload.open ? (
        <InformationPage />
      ) : (
        <>
          {beerList.map((data, index) => {
            return (
              <Card
                key={index}
                onClick={() => clickInformation(data)}
                {...data}
              />
            );
          })}
          <NextButton onClick={() => pageCountIncrement(pageCount + 1)} />
        </>
      )}
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
