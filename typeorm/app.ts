import { createConnection } from "typeorm";
import { User } from "./entities/userEntity";
import express from "express";
import router from "./routes";

createConnection()
  .then(async (connection) => {
    const indexRouter = router;
    const app = express();

    app.get("/create", async (req, res) => {
      const user = new User();
      user.firstName = "Billy Bob";
      user.lastName = "Joel";
      user.isActive = true;
      user.shoppingCart = ["one kombucha", "hello"];

      await connection.manager.save(user);
      res.send(user);
    });

    app.get("/read", async (req, res) => {
      const users = await connection.manager.find(User);
      res.send(users);
    });

    app.listen(3001, () => console.log("App is listening on port 3001!"));

    app.use(indexRouter);
  })
  .catch((error) => console.log(error));

//createConnection()
//  .then(async (connection) => {
//    const user = new User();
//    user.firstName = "Timber";
//    user.lastName = "Saw";
//    user.isActive = true;
//    user.shoppingCart = ["one kombucha", "hello"];
//    await connection.manager.save(user);
//    console.log("saved a new user with id" + user.id);
//    console.log("Loading users from database");
//    const users = await connection.manager.find(User);
//    console.log("Loaded users:", users);
//  })
//  .catch((error) => console.log(error));
