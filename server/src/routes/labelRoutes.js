const { Router } = require("express");

//Middleware
const verifyAuthentication = require("../middlewares/verifyAuthentication");

//Controllers
const LabelController = require("../controllers/LabelController");

//Start router
const router = Router();

//Routes
router.get("/boards/:boardId/labels", verifyAuthentication, LabelController.index);
router.post("/boards/:boardId/labels", verifyAuthentication, LabelController.create);
router.get("/labels/:id", verifyAuthentication, LabelController.show);
router.put("/labels/:id", verifyAuthentication, LabelController.update);
router.delete("/labels/:id", verifyAuthentication, LabelController.delete);

//Export
module.exports = router;
