const { DataTypes } = require("sequelize");
const db = require("../database");

const Tasks = db.define(
  "tasks",
  {
    taskId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      field: "task_id",
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    isCompleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: true,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Tasks;