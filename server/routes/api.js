const express = require("express");
const router = express.Router();
const boardsController = require("../controllers/boardsController");
const listsController = require("../controllers/listsController");
const cardsController = require("../controllers/cardsController");
const {
  validateBoard,
  validateList,
  validateListNewTitle,
  validateCardTitle,
} = require("../validators/validators");

router.get("/boards", boardsController.getBoards);
router.get("/boards/:id", boardsController.getBoard);
router.post("/boards", validateBoard, boardsController.createBoard);

router.post("/lists", validateList, listsController.createList);
router.put("/lists/:id", validateListNewTitle, listsController.updateListTitle);

router.get("/cards/:id", cardsController.getCard);
router.post(
  "/cards",
  validateCardTitle,
  listsController.findList,
  cardsController.createCard
);

module.exports = router;
