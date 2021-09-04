import { createConnection } from "typeorm";
import { User } from "./entities/userEntity";
import express from "express";

//createConnection()
//  .then(async (connection) => {
//    const app = express();
//    app.get("/create", async (req, res) => {
//      const user = new User();
//      user.firstName = "Billy Bob";
//      user.lastName = "Joel";
//      await connection.manager.save(user);
//      res.send(user);
//    });

//    app.get("/read", async (req, res) => {
//      const users = await connection.manager.find(User);
//      res.send(users);
//    });

//    app.listen(3000, () => console.log("App is listening on port 3000!"));
//  })
//  .catch((error) => console.log(error));

createConnection()
  .then(async (connection) => {
    const user = new User();
    user.firstName = "Timber";
    user.lastName = "Saw";
    user.isActive = true;
    user.shoppingCart = ["one kombucha", "hello"];
    await connection.manager.save(user);
    console.log("saved a new user with id" + user.id);
    console.log("Loading users from database");
    const users = await connection.manager.find(User);
    console.log("Loaded users:", users);
  })
  .catch((error) => console.log(error));
