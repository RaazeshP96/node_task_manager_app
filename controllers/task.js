const Task = require("../model/Task");
const asyncWrapper = require("../middlewares/asyncHandler");

const getAllTask = asyncWrapper(async (_, res) => {
  const tasks = await Task.find({});
  res.json({ tasks });
});

const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.json({ task });
});

const getATask = asyncWrapper(async (req, res, next) => {
  const task = await Task.findOne({ _id: req.params.id });
  if (!task) {
    const error = new Error("Task not found");
    error.message = "Task not found";
    error.status = 404;
    return next(error);
  }
  res.json({ task });
});

const updateTask = asyncWrapper(async (req, res, next) => {
  const task = await Task.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    const error = new Error("Task not found");
    error.message = "Task not found";
    error.status = 404;
    return next(error);
  }
  res.status(200).json({ task });
});

const removeTask = asyncWrapper(async (req, res, next) => {
  const task = await Task.findOneAndDelete({ _id: req.params.id });
  if (!task) {
    const error = new Error("Task not found");
    error.message = "Task not found";
    error.status = 404;
    return next(error);
  }
  res.status(200).json({ task });
});
module.exports = { getAllTask, createTask, getATask, updateTask, removeTask };
