const express = require("express");
const router = express.Router();
const taskController = require("./controllers/task");

router.get("/tasks", taskController.listTasks);
router.post("/tasks", taskController.createTask);
router.put("/tasks/:id", taskController.updateTask);
router.delete("/tasks/:id", taskController.deleteTask);

module.exports = router;
