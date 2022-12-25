const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Hello world!");
});

// app.get("/api/v1/tasks", (req, res) => {});
// app.post("/api/v1/tasks", (req, res) => {});
// app.get("/api/v1/tasks/:id", (req, res) => {});
// app.put("/api/v1/tasks/:id", (req, res) => {});
// app.delete("/api/v1/tasks/:id", (req, res) => {});

const port = 8080;
app.listen(
  port,
  console.log(`Server is listening on http://localhost:${port}`)
);

console.log("hello world!");
