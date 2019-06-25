import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";

import { Store } from "./store";
import Header from "pages/Header";
import InformationPage from "pages/InformationPage";

export default function Routes() {
  return (
    <Provider store={Store}>
      <Header />
      <BrowserRouter>
        <Route path="/" exact component={HomePage} />
        <Route path="/infobeer" component={InformationPage} />
      </BrowserRouter>
    </Provider>
  );
}
