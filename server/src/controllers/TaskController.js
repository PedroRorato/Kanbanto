const { Task } = require("../models");

module.exports = {
  async index(request, response) {
    const { boardId } = request.params;
    try {
      const tasks = await Task.findAll({ where: { boardId } });
      return response.status(200).json(tasks);
    } catch (error) {
      return response.status(500).json(error.message);
    }
  },

  async create(request, response) {
    const { boardId } = request.params;
    const data = request.body;
    data.boardId = parseInt(boardId);
    try {
      const newTask = await Task.create(data);
      return response.status(200).json(newTask);
    } catch (error) {
      return response.status(500).json(error.message);
    }
  },

  async show(request, response) {
    const { id } = request.params;
    try {
      const task = await Task.findByPk(id);
      return response.status(200).json(task);
    } catch (error) {
      return response.status(500).json(error.message);
    }
  },

  async update(request, response) {
    const { id } = request.params;
    const data = request.body;
    try {
      await Task.update(data, { where: { id } });
      const updatedTask = await Task.findByPk(id);
      return response.status(200).json(updatedTask);
    } catch (error) {
      return response.status(500).json(error.message);
    }
  },

  async delete(request, response) {
    const { id } = request.params;
    try {
      const TaskExists = await Task.destroy({ where: { id } });
      if (!TaskExists) return response.status(404).json("Task not found!");
      return response.status(200).json("Task successfully deleted!");
    } catch (error) {
      return response.status(500).json(error.message);
    }
  }
};
