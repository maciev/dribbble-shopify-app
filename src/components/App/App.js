import React from "react";
import { Hero, Header, IconBar } from "components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export const App = () => {
  return (
    <Switch>
      <Route path="/products">
        <div>hello</div>
      </Route>

      <Route exact path="/">
        <div>
          <Header />
          <Hero />
          <IconBar />
        </div>
      </Route>
    </Switch>
  );
};
