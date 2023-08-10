const { DataTypes } = require("sequelize");
const db = require("../database");

const Employees = db.define(
  "employee",
  {
    employeeId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      field: "employee_id",
    },
    employeeName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      field: "employee_name",
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Employees;