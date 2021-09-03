import React from "react";
import { Hero, Header, IconBar, Checkout } from "components";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AppProvider } from "context/AppProvider";
import "reflect-metadata";

import { createConnection, getConnectionManager } from "typeorm";
import { User } from "../../db/typeorm/entities/userEntity";
import { Product } from "../../db/typeorm/entities/productEntity";

const connectionManager = getConnectionManager();
const connection = connectionManager.create({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "chinesepeople3",
  database: "dribbble",
  entities: [Product, User],
  synchronize: true,
  logging: false,
});

await connection
  .connect()

  //.then((connection) => {
  //   here you can start to work with your entities
  //})
  .catch((error) => console.log(error));

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
