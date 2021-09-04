import { createConnection } from "typeorm";
import { User } from "./entities/userEntity";
import express from "express";

//const connection = await createConnection({
//  type: "postgres",
//  host: "localhost",
//  port: 5432,
//  username: "postgres",
//  password: "chinesepeople3",
//  database: "dribbble",
//  migrations: ["src/db/typeorm/migration/*.ts"],
//  entities: [User],
//});

//connection();

createConnection()
  .then(async (connection) => {
    const app = express();
    app.get("/create", async (req, res) => {
      const user = new User();
      user.firstName = "Billy Bob";
      user.lastName = "Joel";
      await connection.manager.save(user);
      res.send(user);
    });

    app.get("/read", async (req, res) => {
      const users = await connection.manager.find(User);
      res.send(users);
    });

    app.listen(3000, () => console.log("App is listening on port 3000!"));
  })
  .catch((error) => console.log(error));

//let connectionModule = module.exports = { connectionModule };
