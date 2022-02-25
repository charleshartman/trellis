const Card = require("../models/card");

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

exports.getCard = getCard;
