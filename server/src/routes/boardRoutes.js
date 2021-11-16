const { Router } = require("express");

//Controllers
const BoardController = require("../controllers/BoardController");

//Start router
const router = Router();

//Routes
router.get("/boards", BoardController.index);
router.post("/boards", BoardController.create);
router.get("/boards/:id", BoardController.show);
router.put("/boards/:id", BoardController.update);
router.delete("/boards/:id", BoardController.delete);
router.post("/boards/:id/users", BoardController.addUser);
router.delete("/boards/:boardId/users/:userId", BoardController.removeUser);



//Export
module.exports = router;
