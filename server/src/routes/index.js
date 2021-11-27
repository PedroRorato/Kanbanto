//Routes
const authRoutes = require("./authRoutes");
const boardRoutes = require("./boardRoutes");
const labelRoutes = require("./labelRoutes");
const taskRoutes = require("./taskRoutes");
const userRoutes = require("./userRoutes");

//Dev temporary routes
const devUserRoutes = require("./devUserRoutes");

module.exports = app => {
  app.use(authRoutes);
  app.use(boardRoutes);
  app.use(labelRoutes);
  app.use(taskRoutes);
  app.use(userRoutes);

  //Dev temporary routes
  app.use(devUserRoutes);
};