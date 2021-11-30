const { Router } = require("express");

//Middleware
const verifyAuthentication = require("../middlewares/verifyAuthentication");

//Controllers
const AuthController = require("../controllers/AuthController");

//Start router
const router = Router();

//Routes
router.post("/register", AuthController.register);
router.post("/login", AuthController.login);
router.put("/profile", verifyAuthentication, AuthController.updateProfile);

//Export
module.exports = router;
