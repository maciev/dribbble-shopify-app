import React from "react";
import { Hero, Header, IconBar, Checkout } from "components";
import { BrowserRouter as Router, Route } from "react-router-dom";

export const App = () => {
  return (
    <Router>
      <Route exact path="/checkout">
        <Checkout />
      </Route>
      <Route exact path="/">
        <>
          <Header />
          <Hero />
          <IconBar />
        </>
      </Route>
    </Router>
  );
};
