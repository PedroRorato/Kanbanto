const { Router } = require("express");

//Controllers
const BoardController = require('../controllers/BoardController');

//Start router
const router = Router();

//Routes
router.get("/boards", BoardController.index);
router.post("/boards", BoardController.create);
router.get("/boards/:id", BoardController.show);
router.put("/boards/:id", BoardController.update);
router.delete("/boards/:id", BoardController.delete);

//Export
module.exports = router;
