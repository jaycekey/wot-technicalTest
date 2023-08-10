const { Tasks } = require("../models");

class TasksServices {
  static async create(task) {
    try {
      const result = await Tasks.create(task);
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async getAll() {
    try {
      const result = await Tasks.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async update(task) {
    try {
      const {taskId, ...rest} = task
      const result = await Tasks.findByPk(taskId);
      await result.update(rest);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async delete(taskId) {
    try {
      const task = await Tasks.findByPk(taskId);

      await task.destroy();
      return '';
    } catch (error) {
      throw error;
    }
  }
}

module.exports = TasksServices;
