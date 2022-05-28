const express = require("express");
const taskRouter = express.Router();
const taskController = require("../controllers/task");

taskRouter.get("/tasks", taskController.listTasks);
taskRouter.post("/tasks", taskController.createTask);
taskRouter.put("/tasks/:id", taskController.updateTask);
taskRouter.delete("/tasks/:id", taskController.deleteTask);

module.exports = taskRouter;
