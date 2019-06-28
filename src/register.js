import runtime from 'serviceworker-webpack-plugin/lib/runtime';
 
export default (() => {
  //service worker
  if ('serviceWorker' in navigator) {
    const registration = runtime.register();
  }
  
  // polyfill
  if (!global || !global._babelPolyfill) {
    require("babel-polyfill");
  }
})();
