const getAllTask = (req, res) => {
  console.log("Task manager");
  res.send("Task manager");
};

const createTask = (req, res) => {
  console.log("Task manager created");
  res.send("Task manager created");
};

const getATask = (req, res) => {
  console.log("Task manager single Task");
  res.send("Task manager single task");
};

const updateTask = (req, res) => {
  console.log("Task manager updated");
  res.send("Task manager updated");
};

const removeTask = (req, res) => {
  console.log("Task manager removed");
  res.send("Task manager removed");
};
module.exports = { getAllTask, createTask, getATask, updateTask, removeTask };
