const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Hello world!");
});

const port = 8080;
app.listen(
  port,
  console.log(`Server is listening on http://localhost:${port}`)
);

console.log("hello world!");
