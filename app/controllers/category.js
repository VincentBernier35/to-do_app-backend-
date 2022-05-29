const { Category } = require("../models");


const categoryController = {
  getAllCategories: async function (req, res) {
    const allCategories = await Category.findAll();

    res.json(allCategories);
  },

  createCategory: async function (req, res) {
    const { name } = req.body;
    
    if(!name) {
      return res.status(404).json({ error: "Please enter a name "});
    }
    const category = await Category.create({ name });

    res.send(category);
  },

  updateCategory: async function (req, res) {
    const categoryId = parseInt(req.params.id);
    const category = await Category.findByPk(categoryId);

    const { name } = req.body;

    category.set({ name });
    await category.save();
    res.json(category);
  },
  deleteCategory: async function (req, res) {
    const categoryId = parseInt(req.params.id);
    const category = await Category.findByPk(categoryId);
    await category.destroy();
    res.status(204).end();
  }
};

module.exports = categoryController;