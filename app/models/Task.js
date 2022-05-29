const sequelize = require("../database");
const { Model, DataTypes } = require("sequelize");

class Task extends Model {}

Task.init({
  // Model attributes are defined here
  name: {
    type: DataTypes.TEXT,

  }
}, {
  sequelize,
  timestamps: false,
  tableName: "tasks"
});

module.exports = Task;