const { Router } = require("express");
const categoryRouter = require("./categoryRouter");
const taskRouter = require("./taskRouter");

const mainRouter = new Router();

mainRouter.use(taskRouter);
mainRouter.use(categoryRouter);

module.exports = mainRouter;