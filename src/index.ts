/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import express from "express";
import "./database";

const app = express();
const port = process.env.PORT || "8000";

app.get("/", (req, res) => {
  res.send("Up and running 😎");
});

app.listen(port, () => console.log(`server is listening on ${port}`));
