import React, { useState, useEffect } from "react";

import Api from "services/api.js";

const Homepage = () => {
  // const [data, dataSet] = useState(false);

  // async function getData() {
  //   dataSet(response.data);
  // }

  useEffect(() => {
    async () => {
      const response = await Api.get("beers");
      console.log(response.data);
    };
  }, []);

  return (
    <div>
      <h1>Homepage</h1>
    </div>
  );
};

export default Homepage;
