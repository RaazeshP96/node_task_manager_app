const Task = require("../model/Task");
const asyncWrapper = require("../middlewares/asyncHandler");
const { createCustomError } = require("../errors/custom-error");

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
    return next(createCustomError("Task not found", 404));
  }
  res.json({ task });
});

const updateTask = asyncWrapper(async (req, res, next) => {
  const task = await Task.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    return next(createCustomError("Task not found", 404));
  }
  res.status(200).json({ task });
});

const removeTask = asyncWrapper(async (req, res, next) => {
  const task = await Task.findOneAndDelete({ _id: req.params.id });
  if (!task) {
    return next(createCustomError("Task not found", 404));
  }
  res.status(200).json({ task });
});
module.exports = { getAllTask, createTask, getATask, updateTask, removeTask };
