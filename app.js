const express = require("express");
const path = require("path");
require("dotenv").config();
const app = express();
const taskRouter = require("./routes/task");
const connectDB = require("./db/connect");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1/tasks", taskRouter);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    console.log("MangoDB connected!!!");
    app.listen(
      port,
      console.log(`Server is listening on http://localhost:${port}`)
    );
  } catch (err) {
    console.log(err);
  }
};

start();
