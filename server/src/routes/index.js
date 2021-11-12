//Routes
const boardRoutes = require("./boardRoutes");

module.exports = app => {
  app.use(boardRoutes);
};