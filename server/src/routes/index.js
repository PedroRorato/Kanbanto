//Routes
const boardRoutes = require("./boardRoutes");
const labelRoutes = require("./labelRoutes");

module.exports = app => {
  app.use(boardRoutes);
  app.use(labelRoutes);
};