import express from "express";

const router = express.Router();
{
  router.get("/api/hello", (req, res) => {
    res.json("hello world");
  });
}

export default router;
