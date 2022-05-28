const sequelize = require("../database");
const { Model, Sequelize, DataTypes } = require("sequelize");

class Category extends Model {}

Category.init({
  name: {
    type: Sequelize.STRING,
  },
  color: {
    type: DataTypes.TEXT
  }

}, {
  sequelize,
  tableName: "tasks"
});

module.exports = Category;
