import React from "react";
import { Hero, Header, IconBar, Checkout } from "components";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { QuantityProvider } from "context/QuantityContext";

export const App = () => {
  return (
    <QuantityProvider>
      <Router>
        <Route component={Checkout} exact path="/checkout" />
        {/*<Checkout />
        </Route>*/}
        <Route exact path="/">
          <>
            <Header />
            <Hero />
            <IconBar />
          </>
        </Route>
      </Router>
    </QuantityProvider>
  );
};
