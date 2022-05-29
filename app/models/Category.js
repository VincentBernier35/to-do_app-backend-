const sequelize = require("../database");
const { Model, DataTypes } = require("sequelize");

class Category extends Model {}

Category.init({
  name: {
    type: DataTypes.TEXT,
    allowNull: false
  }

}, {
  sequelize,
  timestamps: false,
  tableName: "categories"
});

module.exports = Category;
