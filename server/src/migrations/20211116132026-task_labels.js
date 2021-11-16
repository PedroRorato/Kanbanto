/* eslint-disable no-unused-vars */
"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("task_labels", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      labelId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Labels", key: "id" }
      },
      taskId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Tasks", key: "id" }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("task_labels");
  }
};
