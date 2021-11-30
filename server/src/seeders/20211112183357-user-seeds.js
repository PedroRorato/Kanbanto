/* eslint-disable no-unused-vars */
"use strict";
const { hash } = require("bcryptjs");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const hashedPassword = await hash("12345", 8);

    await queryInterface.bulkInsert("Users", [
      {
        name: "Pedro Rorato",
        email: "pedro@gmail.com",
        initials: "PR",
        password: hashedPassword,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Maria Cristina",
        email: "maria@gmail.com",
        initials: "MC",
        password: hashedPassword,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Users", null, {});

  }
};
