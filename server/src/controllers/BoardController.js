const { Board } = require("../models");

module.exports = {
  async index(request, response) {
    try {
      const boards = await Board.findAll();
      return response.status(200).json(boards);
    } catch (error) {
      return response.status(500).json(error.message);
    }
  },

  async create(request, response) {
    const data = request.body;
    try {
      const newBoard = await Board.create(data);
      return response.status(200).json(newBoard);
    } catch (error) {
      return response.status(500).json(error.message);
    }
  },

  async show(request, response) {
    const { id } = request.params;
    try {
      const board = await Board.findByPk(id);
      const admin = await board.getUser();
      return response.status(200).json(admin);
    } catch (error) {
      return response.status(500).json(error.message);
    }
  },

  async update(request, response) {
    const { id } = request.params;
    const data = request.body;
    try {
      await Board.update(data, { where: { id } });
      const updatedBoard = await Board.findByPk(id);
      return response.status(200).json(updatedBoard);
    } catch (error) {
      return response.status(500).json(error.message);
    }
  },

  async delete(request, response) {
    const { id } = request.params;
    try {
      const boardExists = await Board.destroy({ where: { id } });
      if (!boardExists) return response.status(404).json("Board not found!");
      return response.status(200).json("Board successfully deleted!");
    } catch (error) {
      return response.status(500).json(error.message);
    }
  }
};
