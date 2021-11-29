const { Task } = require("../models");

module.exports = {
  async index(request, response) {
    const { boardId } = request.params;
    try {
      const tasks = await Task.findAll({ where: { boardId }, include: ["labels", "users"] });
      return response.status(200).json(tasks);
    } catch (error) {
      return response.status(500).json(error.message);
    }
  },

  async create(request, response) {
    const { boardId } = request.params;
    const data = request.body;
    data.boardId = parseInt(boardId);
    data.status = "backlog";
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
  },

  async addLabel(request, response) {
    const { id } = request.params;
    const { labelId } = request.body;
    try {
      const task = await Task.findByPk(id);
      await task.addLabel(labelId);
      return response.status(200).json("Label successfully added!");
    } catch (error) {
      return response.status(500).json(error.message);
    }
  },

  async removeLabel(request, response) {
    const { taskId, labelId } = request.params;
    try {
      const task = await Task.findByPk(taskId);
      await task.removeLabels(labelId);
      return response.status(200).json("Label successfully removed!");
    } catch (error) {
      return response.status(500).json(error.message);
    }
  },

  async addUser(request, response) {
    const { id } = request.params;
    const { userId } = request.body;
    try {
      const task = await Task.findByPk(id);
      await task.addUser(userId);
      return response.status(200).json("User successfully added!");
    } catch (error) {
      return response.status(500).json(error.message);
    }
  },

  async removeUser(request, response) {
    const { taskId, userId } = request.params;
    try {
      const task = await Task.findByPk(taskId);
      await task.removeUsers(userId);
      return response.status(200).json("User successfully removed!");
    } catch (error) {
      return response.status(500).json(error.message);
    }
  }
};
