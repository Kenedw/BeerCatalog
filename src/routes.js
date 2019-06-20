import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";

export default function Routes() {
  return (
    <div className="ui-container">
      <BrowserRouter>
        <Route path="/" exact component={HomePage} />
      </BrowserRouter>
    </div>
  );
}
