const Card = require("../models/card");
const { validationResult } = require("express-validator");
const List = require("../models/list");

const getCard = (req, res, next) => {
  const id = req.params.id;

  Card.findOne({ _id: id })
    .populate("comments")
    .then((card) => {
      if (!card) {
        res.json({ error: "Card does not exist" });
      } else {
        console.log(card);
        res.json(card);
      }
    })
    .catch(() => {
      throw new Error("Card does not exist.");
    });
};

const createCard = (req, res, next) => {
  console.log(req.list);
  const errors = validationResult(req);
  const id = req.body.listId;
  const cardTitle = req.body.card.title;
  const boardId = req.list.boardId;

  if (errors.isEmpty()) {
    Card.create({ listId: id, title: cardTitle, boardId }).then((card) => {
      List.findByIdAndUpdate(id, { $push: { cards: card._id } }).then(() => {
        res.json({ card });
      });
    });
  }
};

exports.getCard = getCard;
exports.createCard = createCard;
