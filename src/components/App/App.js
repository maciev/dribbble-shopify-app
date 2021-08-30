import React from "react";
import { Hero, Header, IconBar, Checkout } from "components";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AppProvider } from "context/AppProvider";

export const App = () => {
  return (
    <AppProvider>
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
    </AppProvider>
  );
};
