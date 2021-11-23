const { Router } = require("express");

//Middleware
const verifyAuthentication = require("../middlewares/verifyAuthentication");

//Controllers
const TaskController = require("../controllers/TaskController");

//Start router
const router = Router();

//Routes
router.get("/boards/:boardId/tasks", verifyAuthentication, TaskController.index);
router.post("/boards/:boardId/tasks", verifyAuthentication, TaskController.create);
router.get("/tasks/:id", verifyAuthentication, TaskController.show);
router.put("/tasks/:id", verifyAuthentication, TaskController.update);
router.delete("/tasks/:id", verifyAuthentication, TaskController.delete);
router.post("/tasks/:id/labels", verifyAuthentication, TaskController.addLabel);
router.delete(
  "/tasks/:taskId/labels/:labelId",
  verifyAuthentication,
  TaskController.removeLabel
);

//Export
module.exports = router;
