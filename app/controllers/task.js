const { Task } = require("../models");

const taskController = {
  listTasks: async function (req, res) {
    const tasks = await Task.findAll();
    res.json(tasks);
  },
  createTask: async function (req, res) {
    const { name } = req.body;
    console.log("req =>", req.body);
    console.log("nom =>", name);

    if(!name) {
      return res.status(404).json({ error: "Please enter a name "});
    }

    const task = await Task.create({ name });
    res.send(task);
  },
  updateTask: async function (req, res) {
    const taskId = parseInt(req.params.id);
    const task = await Task.findByPk(taskId);
    if (! task) {
      return res.status(404).json({ error: "Task not found. Please verify the provided id." });
    }
    const { name } = req.body;
    task.set({ name });
    await task.save();
    res.json(task);
  },
  deleteTask: async function (req, res){
    const taskId = parseInt(req.params.id);
    const task = await Task.findByPk(taskId);
    if (! task) {
      return res.status(404).json({ error: "Task not found. Please verify the provided id." });
    }
    await task.destroy();
    res.status(204).end();
  }
};

module.exports = taskController;