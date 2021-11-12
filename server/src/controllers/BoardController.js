const { Board } = require("../models");

module.exports = {
  async index(request, response) {
    try {
      const boards = await Board.findAll();
      return response.status(200).json(boards);
    } catch (error) {
      return response.status(500).json(error.message);
    }
  }
};
