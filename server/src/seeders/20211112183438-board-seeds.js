/* eslint-disable no-unused-vars */
"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Boards", [
      {
        name: "Fazenda",
        description: "Tarefas da Fazenda",
        adminId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Programação",
        adminId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Boards", null, {});
  }
};