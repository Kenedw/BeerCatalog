import React from "react";
import ReactDOM from "react-dom";

import "./style.css";
import "./register.js";

import App from "./routes.js";

if (typeof window !== "undefined") {
  ReactDOM.render(<App />, document.getElementById("root"));
}
