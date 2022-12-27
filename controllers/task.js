const Task = require("../model/Task");

const getAllTask = async (_, res) => {
  try {
    const tasks = await Task.find({});
    res.json({ tasks });
  } catch (err) {
    console.log(err.message);
    res.status(500).json(err.message);
  }
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.json({ task });
  } catch (err) {
    console.log(err.message);
    res.status(500).json(err.message);
  }
};

const getATask = async (req, res) => {
  try {
    const task = await Task.findOne({ _id: req.params.id });
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.json({ task });
  } catch (err) {
    console.error(err.message);
    res.status(500).json(err.message);
  }
};

const updateTask = async (req, res) => {
  try {
    const task = await Task.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return res.status(404).json({ message: "TASK not found" });
    }
    res.status(200).json({ task });
  } catch (err) {
    console.error(err.message);
    res.status(500).json(err.message);
  }
};

const removeTask = async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({ _id: req.params.id });
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.status(200).json({ task });
  } catch (error) {
    console.error(err.message);
    res.status(500).json(err.message);
  }
};
module.exports = { getAllTask, createTask, getATask, updateTask, removeTask };
