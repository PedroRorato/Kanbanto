const { Label } = require("../models");

module.exports = {
  async index(request, response) {
    const { boardId } = request.params;
    try {
      const labels = await Label.findAll({ where: { boardId } });
      return response.status(200).json(labels);
    } catch (error) {
      return response.status(500).json(error.message);
    }
  },

  async create(request, response) {
    const { boardId } = request.params;
    const data = request.body;
    data.boardId = parseInt(boardId);
    try {
      const newLabel = await Label.create(data);
      return response.status(200).json(newLabel);
    } catch (error) {
      return response.status(500).json(error.message);
    }
  },

  async show(request, response) {
    const { id } = request.params;
    try {
      const label = await Label.findByPk(id);
      return response.status(200).json(label);
    } catch (error) {
      return response.status(500).json(error.message);
    }
  },

  async update(request, response) {
    const { id } = request.params;
    const data = request.body;
    try {
      await Label.update(data, { where: { id } });
      const updatedLabel = await Label.findByPk(id);
      return response.status(200).json(updatedLabel);
    } catch (error) {
      return response.status(500).json(error.message);
    }
  },

  async delete(request, response) {
    const { id } = request.params;
    try {
      const labelExists = await Label.destroy({ where: { id } });
      if (!labelExists) return response.status(404).json("Label not found!");
      return response.status(200).json("Label successfully deleted!");
    } catch (error) {
      return response.status(500).json(error.message);
    }
  }
};
