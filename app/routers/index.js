const { Router } = require("express");
const categoryRouter = require("./categoryRouter");
const taskRouter = require("./taskRouter");

const mainRouter = new Router();

mainRouter.use(categoryRouter);
mainRouter.use(taskRouter);

module.exports = mainRouter;