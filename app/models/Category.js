const { sequelize } = require("../database");
const { Model, Sequelize } = require("sequelize");

class Category extends Model {}

Category.init({
  name: Sequelize.STRING,
  color: Sequelize.STRING
}, {
  sequelize,
  timestamps: false,
  tableName: "tasks"
});

module.exports = Task;
