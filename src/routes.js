import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import HomePage from './components/HomePage/HomePage.js';

export default function Routes() {
  return(
    <BrowserRouter>
      <Route path="/" exact component={HomePage} />
    </BrowserRouter>
  );
}