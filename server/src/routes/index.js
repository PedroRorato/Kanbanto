//Routes
const boardRoutes = require("./boardRoutes");
const labelRoutes = require("./labelRoutes");
const taskRoutes = require("./taskRoutes");

module.exports = app => {
  app.use(boardRoutes);
  app.use(labelRoutes);
  app.use(taskRoutes);
};