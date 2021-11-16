const { User } = require("../models");

module.exports = {
  async index(request, response) {
    try {
      const boards = await User.findAll({ include: "boards" });
      return response.status(200).json(boards);
    } catch (error) {
      return response.status(500).json(error.message);
    }
  },

  async create(request, response) {
    const data = request.body;
    try {
      const newBoard = await User.create(data);
      return response.status(200).json(newBoard);
    } catch (error) {
      return response.status(500).json(error.message);
    }
  },

  async show(request, response) {
    const { id } = request.params;
    try {
      const board = await User.findByPk(id);
      return response.status(200).json(board);
    } catch (error) {
      return response.status(500).json(error.message);
    }
  },

  async update(request, response) {
    const { id } = request.params;
    const data = request.body;
    try {
      await User.update(data, { where: { id } });
      const updatedBoard = await User.findByPk(id);
      return response.status(200).json(updatedBoard);
    } catch (error) {
      return response.status(500).json(error.message);
    }
  },

  async delete(request, response) {
    const { id } = request.params;
    try {
      const boardExists = await User.destroy({ where: { id } });
      if (!boardExists) return response.status(404).json("Board not found!");
      return response.status(200).json("Board successfully deleted!");
    } catch (error) {
      return response.status(500).json(error.message);
    }
  }
};

// console.log(`Board ID ${id} | User ID ${userId}`);
