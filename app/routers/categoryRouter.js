const express = require("express");
const categoryRouter = express.Router();
const categoryController = require("../controllers/category");

categoryRouter.get("/category", categoryController.getAllCategories);
categoryRouter.post("/category", categoryController.createCategory);
categoryRouter.put("/category/:id", categoryController.updateCategory);
categoryRouter.delete("/category/:id", categoryController.deleteCategory);

module.exports = categoryRouter;
