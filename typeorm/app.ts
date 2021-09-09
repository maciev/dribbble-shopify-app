import { createConnection } from "typeorm";
import express from "express";
import cors from "cors";

createConnection().then(async (_connection) => {
  const app = express();
  app.use(express.json());
  //const router = express.Router();
  //app.use("/", router);

  app.use(cors());

  //app.get("/create", async (req, res) => {
  //  const user = new User();
  //  user.firstName = "Billy Bob";
  //  user.lastName = "Joel";
  //  user.isActive = true;
  //  user.shoppingCart = ["one kombucha", "hello"];

  //  await connection.manager.save(user);
  //  res.send(user);
  //});

  //app.get("/read", async (req, res) => {
  //  const users = await connection.manager.find(User);
  //  res.send(users);
  //});

  app.put("/quantity", (request, response) => {
    console.log(request.body);
  });

  app.listen(5000, () => console.log("App is listening on port 5000!"));
});
