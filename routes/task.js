const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log("Task manager");
  res.send("Task manager");
});
// router.post("/api/v1/tasks", (req, res) => {});
// router.get("/api/v1/tasks/:id", (req, res) => {});
// router.put("/api/v1/tasks/:id", (req, res) => {});
// router.delete("/api/v1/tasks/:id", (req, res) => {});

module.exports = router;
