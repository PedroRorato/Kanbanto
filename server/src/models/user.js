/* eslint-disable no-unused-vars */
"use strict";
const {
  Model
} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.Board, { as: "boards", through: "board_users" });
      this.belongsToMany(models.Task, { as: "tasks", through: "task_users" });
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    initials: DataTypes.STRING,
    password: DataTypes.STRING,
    picture: DataTypes.STRING
  }, {
    defaultScope: {
      attributes: { exclude: ["password", "createdAt", "updatedAt"] },
    },
    scopes: {
      withPassword: {}
    },
    sequelize,
    modelName: "User",
  });
  return User;
};