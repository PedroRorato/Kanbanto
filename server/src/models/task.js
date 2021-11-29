/* eslint-disable no-unused-vars */
"use strict";
const {
  Model
} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Board, { as: "board", foreignKey: "boardId" });
      this.belongsToMany(models.Label, { as: "labels", through: "task_labels" });
      this.belongsToMany(models.User, { as: "users", through: "task_users" });
    }
  }
  Task.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    status: DataTypes.STRING,
    startsAt: DataTypes.DATE,
    endsAt: DataTypes.DATE
  }, {
    defaultScope: {
      attributes: { exclude: ["createdAt", "updatedAt"] },
      include: "users"
    },
    sequelize,
    modelName: "Task",
  });
  return Task;
};