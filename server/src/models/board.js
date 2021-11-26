/* eslint-disable no-unused-vars */
"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Board extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Label, { as: "labels", foreignKey: "boardId" });
      this.hasMany(models.Task, { as: "tasks", foreignKey: "boardId" });
      this.belongsTo(models.User, { foreignKey: "adminId" });
      this.belongsToMany(models.User, { as: "users", through: "board_users" });
    }
  }
  Board.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    defaultScope: {
      attributes: { exclude: ["createdAt", "updatedAt"] },
    },
    sequelize,
    modelName: "Board",
  });
  return Board;
};