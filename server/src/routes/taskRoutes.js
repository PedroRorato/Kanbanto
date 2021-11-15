const { Router } = require("express");

//Controllers
const TaskController = require("../controllers/TaskController");

//Start router
const router = Router();

//Routes
router.get("/boards/:boardId/tasks", TaskController.index);
router.post("/boards/:boardId/tasks", TaskController.create);
router.get("/tasks/:id", TaskController.show);
router.put("/tasks/:id", TaskController.update);
router.delete("/tasks/:id", TaskController.delete);

//Export
module.exports = router;
