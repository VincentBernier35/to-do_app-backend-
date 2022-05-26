const express = require("express");
const router = express.Router();
const taskController = require("./controllers/task");

router.get("/tasks", taskController.listTasks);
router.delete("/tasks", taskController.deleteTask);
router.post("/tasks", taskController.createTask);
router.put("/tasks", taskController.updateTask);

module.exports = router;
