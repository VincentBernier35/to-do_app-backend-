const { Router } = require("express");
const taskRouter = require("./taskRouter");
const categoryRouter = require("./categoryRouter.js");

const mainRouter = new Router();

mainRouter.use(taskRouter);
mainRouter.use(categoryRouter);

