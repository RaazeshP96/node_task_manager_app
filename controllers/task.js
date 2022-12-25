const getAllTask = (req, res) => {
  console.log("Task manager");
  res.send("Task manager");
};

const createTask = (req, res) => {
  console.log(req.body);
  res.json(req.body);
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
