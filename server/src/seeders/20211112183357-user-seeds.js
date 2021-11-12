/* eslint-disable no-unused-vars */
"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert("Users", [
      {
        name: "Pedro Rorato",
        email: "pedro@gmail.com",
        password: "12345",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Maria Cristina",
        email: "maria@gmail.com",
        password: "12345",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Users", null, {});

  }
};
