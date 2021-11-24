const { Board } = require("../models");

module.exports = {
  async index(request, response) {
    try {
      const boards = await Board.findAll({ include: "users", order: [["name", "ASC"]] });
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
      const board = await Board.findOne({
        where: {
          id
        },
        include: "users", order: [["name", "ASC"]]
      });
      return response.status(200).json(board);
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
  },

  async addUser(request, response) {
    const { id } = request.params;
    const { userId } = request.body;
    try {
      const board = await Board.findByPk(id);
      await board.setUsers(userId);
      return response.status(200).json("User successfully added!");
    } catch (error) {
      return response.status(500).json(error.message);
    }
  },

  async removeUser(request, response) {
    const { boardId, userId } = request.params;
    try {
      const board = await Board.findByPk(boardId);
      await board.removeUsers(userId);
      return response.status(200).json("User successfully removed!");
    } catch (error) {
      return response.status(500).json(error.message);
    }
  }


  //CHANGE ADMIN
};

// console.log(`Board ID ${id} | User ID ${userId}`);
