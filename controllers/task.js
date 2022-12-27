const Task = require("../model/Task");

const getAllTask = (req, res) => {
  console.log("Task manager");
  res.send("Task manager");
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.json(task);
  } catch (err) {
    console.log(err.message);
    res.status(500).json(err.message);
  }
};

const getATask = (req, res) => {
  console.log(`Task manager single Task ${req.params.id}`);
  res.send(`Task manager single Task ${req.params.id}`);
};

const updateTask = (req, res) => {
  console.log(`Task manager updated ${req.params.id}`);
  res.send(`Task manager updated ${req.params.id}`);
};

const removeTask = (req, res) => {
  console.log(`Task manager removed ${req.params.id}`);
  res.send(`Task manager removed ${req.params.id}`);
};
module.exports = { getAllTask, createTask, getATask, updateTask, removeTask };
