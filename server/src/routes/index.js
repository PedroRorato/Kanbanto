//Routes
const boardRoutes = require("./boardRoutes");
const labelRoutes = require("./labelRoutes");
const taskRoutes = require("./taskRoutes");

//Dev temporary routes
const devUserRoutes = require("./devUserRoutes");

module.exports = app => {
  app.use(boardRoutes);
  app.use(labelRoutes);
  app.use(taskRoutes);

  //Dev temporary routes
  app.use(devUserRoutes);
};