const { Router } = require("express");

//Controllers
const LabelController = require("../controllers/LabelController");

//Start router
const router = Router();

//Routes
router.get("/boards/:boardId/labels", LabelController.index);
router.post("/boards/:boardId/labels", LabelController.create);
router.get("/labels/:id", LabelController.show);
router.put("/labels/:id", LabelController.update);
router.delete("/labels/:id", LabelController.delete);

//Export
module.exports = router;
