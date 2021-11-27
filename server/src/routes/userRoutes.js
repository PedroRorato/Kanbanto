const { Router } = require("express");

//Controllers
const UserController = require("../controllers/UserController");

//Start router
const router = Router();

//Routes
router.get("/users", UserController.search);

//Export
module.exports = router;
