const express = require("express");
const routes = express.Router();

//Middlewares

//Controllers
const BoardController = require("./controllers/BoardController");

//ROUTES
//Board
routes.get("/boards", BoardController.index);

module.exports = routes;