const express = require("express");
const app = express();
const taskRouter = require("./routes/task");

app.use("/api/v1/tasks", taskRouter);
// app.post("/api/v1/tasks", (req, res) => {});
// app.get("/api/v1/tasks/:id", (req, res) => {});
// app.put("/api/v1/tasks/:id", (req, res) => {});
// app.delete("/api/v1/tasks/:id", (req, res) => {});

const port = 8080;
app.listen(
  port,
  console.log(`Server is listening on http://localhost:${port}`)
);
