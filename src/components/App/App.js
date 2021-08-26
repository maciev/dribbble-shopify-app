import React from "react";
import { Hero, Header, IconBar, Products, Checkout } from "components";
import { BrowserRouter as Router, Route } from "react-router-dom";

export const App = () => {
  return (
    <Router>
      <Route component={Checkout} exact path="/checkout"></Route>

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
