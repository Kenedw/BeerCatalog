import React from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { Provider } from "react-redux";

import { Store } from "./store";
import HomePage from "pages/HomePage";
import Header from "pages/Header";
import Footer from "pages/Footer";
import NotFound from "pages/NotFound";

export default function Routes() {
  return (
    <Provider store={Store}>
      <Header />
      <BrowserRouter>
        <Route path="/" exact component={HomePage} />
        <Redirect from='*' to='/' />
      </BrowserRouter>
      <Footer />
    </Provider>
  );
}
