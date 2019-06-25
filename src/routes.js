import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";

import { Store } from "./store";
import HomePage from "pages/HomePage";
import Header from "pages/Header";

export default function Routes() {
  return (
    <Provider store={Store}>
      <Header />
      <BrowserRouter>
        <Route path="/" exact component={HomePage} />
      </BrowserRouter>
    </Provider>
  );
}
