const express = require("express");
const initModels = require("./utils/initModels");
const Employees = require("./employee.model");
const db = require("./database");

const app = express();
app.use(express.json());
initModels();

db.authenticate()
  .then(() => console.log("Autenticación exitosa"))
  .catch((error) => console.log(error));

db.sync({ force: false })
  .then(() => console.log("Sincronizado correctamente"))
  .catch((error) => console.log(error));

const getEmployees = async () => {
  try {
    const result = await Employees.findAll();
    return result;
  } catch (error) {
    throw error;
  }
};

getEmployees()
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
