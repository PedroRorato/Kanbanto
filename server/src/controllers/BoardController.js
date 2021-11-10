const { Board } = require("../models");

module.exports = {
  async index(request, response) {
    const boards = await Board.findAll();

    return response.json(boards);
  }
};
