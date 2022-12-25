const express = require("express");
const router = express.Router();
const {
  getAllTask,
  createTask,
  getATask,
  updateTask,
  removeTask,
} = require("../controllers/task");

router.get("/", getAllTask);
router.post("/", createTask);
router.get("/:id", getATask);
router.put("/:id", updateTask);
router.delete("/:id", removeTask);

module.exports = router;
