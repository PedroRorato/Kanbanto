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
router.post("/tasks/:id/labels", TaskController.addLabel);
router.delete("/tasks/:taskId/labels/:labelId", TaskController.removeLabel);

//Export
module.exports = router;
