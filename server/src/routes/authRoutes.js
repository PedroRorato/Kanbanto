const { Router } = require("express");

//Controllers
const AuthController = require("../controllers/AuthController");

//Start router
const router = Router();

//Routes
router.post("/register", AuthController.register);
router.post("/login", AuthController.login);

//Export
module.exports = router;
