import express from "express";
import router from "./router";
const app = express();

app.get("/", (req, res) => {
  console.log("Hello To The World");
  res.status(200);
  res.json({ message: "Not today Satan" });
});

app.use("/api", router);

export default app;
