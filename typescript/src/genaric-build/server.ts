import express from "express";

const app = express();

app.get("/", (req, res) => {
  console.log("Hello To The World");
  res.status(200);
  res.json({ message: "Not today Satan" });
});

export default app;
