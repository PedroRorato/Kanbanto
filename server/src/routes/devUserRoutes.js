const { Router } = require("express");

//Controllers
const DevUsersController = require("../controllers/DevUsersController");

//Start router
const router = Router();

//Routes
// router.get("/users", DevUsersController.index);
router.post("/users", DevUsersController.create);
router.get("/users/:id", DevUsersController.show);
router.put("/users/:id", DevUsersController.update);
router.delete("/users/:id", DevUsersController.delete);


//Export
module.exports = router;
