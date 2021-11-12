const { Router } = require("express");

//Controllers
const BoardController = require('../controllers/BoardController');

//Start router
const router = Router();

//Routes
router.get("/boards", BoardController.index);

//Export
module.exports = router;
