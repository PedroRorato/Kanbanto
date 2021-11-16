const { User } = require("../models");

module.exports = {
  async index(request, response) {
    try {
      const users = await User.findAll({ include: "boards" });
      return response.status(200).json(users);
    } catch (error) {
      return response.status(500).json(error.message);
    }
  },

  async create(request, response) {
    const data = request.body;
    try {
      await User.create(data);
      return response.status(200).json("User succesfully created!");
    } catch (error) {
      return response.status(500).json(error.message);
    }
  },

  async show(request, response) {
    const { id } = request.params;
    try {
      const user = await User.findByPk(id);
      return response.status(200).json(user);
    } catch (error) {
      return response.status(500).json(error.message);
    }
  },

  async update(request, response) {
    const { id } = request.params;
    const data = request.body;
    try {
      await User.update(data, { where: { id } });
      const updatedUser = await User.findByPk(id);
      return response.status(200).json(updatedUser);
    } catch (error) {
      return response.status(500).json(error.message);
    }
  },

  async delete(request, response) {
    const { id } = request.params;
    try {
      const userExists = await User.destroy({ where: { id } });
      if (!userExists) return response.status(404).json("User not found!");
      return response.status(200).json("User successfully deleted!");
    } catch (error) {
      return response.status(500).json(error.message);
    }
  }
};

// console.log(`Board ID ${id} | User ID ${userId}`);
