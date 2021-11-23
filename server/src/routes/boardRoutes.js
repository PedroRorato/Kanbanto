const { Router } = require("express");

//Middleware
const verifyAuthentication = require("../middlewares/verifyAuthentication");

//Controllers
const BoardController = require("../controllers/BoardController");

//Start router
const router = Router();

//Routes
router.get("/boards", verifyAuthentication, BoardController.index);
router.post("/boards", verifyAuthentication, BoardController.create);
router.get("/boards/:id", verifyAuthentication, BoardController.show);
router.put("/boards/:id", verifyAuthentication, BoardController.update);
router.delete("/boards/:id", verifyAuthentication, BoardController.delete);
router.post("/boards/:id/users", verifyAuthentication, BoardController.addUser);
router.delete(
  "/boards/:boardId/users/:userId",
  verifyAuthentication,
  BoardController.removeUser
);



//Export
module.exports = router;
