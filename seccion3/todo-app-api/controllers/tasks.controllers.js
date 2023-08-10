const { TasksServices } = require("../services");
const response = require("../network/response");

const createTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    const task = await TasksServices.create({
      title,
      description
    });
    response.success(req, res, task, 201);
  } catch (error) {
    response.error(
      req,
      res,
      "Unexpected Error",
      500,
      "Error en el controlador",
      error
    );
  }
};

const getAllTasks = async (req, res) => {
  try {
    const tasks = await TasksServices.getAll();
    response.success(req, res, tasks, 200);
  } catch (error) {
    response.error(
      req,
      res,
      "Unexpected Error",
      500,
      "Error en el controlador",
      error
    );
  }
};

const deleteTask = async (req, res) => {
  try {
    const { taskId } = req.body;
    TasksServices.delete(taskId);
    response.success(req, res, taskId, 204);
  } catch (error) {
    response.error(
      req,
      res,
      "Unexpected Error",
      500,
      "Error en el controlador",
      error
    );
  }
};

const updateTask = async (req, res) => {
  try {
    const { taskId, title, description, isCompleted } = req.body;
    const updatedTask = TasksServices.update({
      taskId,
      title,
      description,
      isCompleted,
    });
    response.success(req, res, updatedTask, 200);
  } catch (error) {
    response.error(
      req,
      res,
      "Unexpected Error",
      500,
      "Error en el controlador",
      error
    );
  }
};

module.exports = {
  createTask,
  getAllTasks,
  deleteTask,
  updateTask
};
