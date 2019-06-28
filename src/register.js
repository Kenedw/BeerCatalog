import React from "react";

export default (() => {
  // //service worker
  // if ("serviceWorker" in navigator) {
  //   navigator.serviceWorker
  //     .register("/service-worker.js")
  //     .then(() => console.log("Service Worker registered successfully."))
  //     .catch(error =>
  //       console.log("Service Worker registration failed:", error)
  //     );
  // }
  // polyfill
  if (!global || !global._babelPolyfill) {
    require("babel-polyfill");
  }
});
