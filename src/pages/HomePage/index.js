import React, { useState, useEffect } from "react";

import Api from "services/api.js";
import Card from "components/card";

const Homepage = () => {
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
    <div>
      <h1>BeerCatalog</h1>
      {beerList.map((data, index) => {
        return (
          <div key={index}>
            <Card {...data} />
          </div>
        );
      })}
    </div>
  );
};

export default Homepage;
