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
      this.belongsTo(models.Board, {
        foreignKey: "boardId"
      });
      this.belongsToMany(models.Label, { as: "labels", through: "task_labels" });
    }
  }
  Task.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    status: DataTypes.STRING,
    startsAt: DataTypes.DATE,
    endsAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: "Task",
  });
  return Task;
};