const Board = require("../models/board");

module.exports = {
  async index(request, response) {
    const cidades = await Cidade.findAll();

    return response.json(cidades);
  }
};
