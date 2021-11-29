const { Router } = require("express");

//Middleware
const verifyAuthentication = require("../middlewares/verifyAuthentication");

//Controllers
const UserController = require("../controllers/UserController");

//Start router
const router = Router();

//Routes
router.get("/users", verifyAuthentication, UserController.search);

//Export
module.exports = router;
