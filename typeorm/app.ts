import { createConnection } from "typeorm";
import express, { Request, Response } from "express";
//import { User } from "./entities/userEntity";
import cors from "cors";

createConnection().then(async (_connection) => {
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cors());
  //create
  app.post("/home", async (req: Request, res: Response) => {
    console.log(req.body); //undefined
    res.end("Success");
  });

  //  try {
  //    const user = User.create({
  //      firstName,
  //      lastName,
  //      isActive,
  //      shoppingCart,
  //      quantity,
  //    });

  //    await user.save();
  //    return res.json(user);
  //  } catch (error) {
  //    return res.json(error);
  //  }
  //});

  //read
  //update
  //delete
  //find
  //app.put("/quantity", (request, response) => {
  //  console.log(request.body);
  //});

  //const updateUserQuantity = async (req: Request, res: Response) => {
  //  const user = new User();
  //  user.firstName = "Billy Bob";
  //  user.lastName = "Joel";
  //  user.isActive = true;

  //  user.shoppingCart = ["one kombucha", "hello"];
  //  user.quantity = req.body.quantity;

  //  await user.save();
  //};

  app.listen(5000, () => console.log("App is listening on port 5000!"));
});
