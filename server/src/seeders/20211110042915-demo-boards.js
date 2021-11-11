'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Boards', [
      {
        name: 'Fazenda',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Programação',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Boards', null, {});
  }
};
