const Board = require("../models/board");
const List = require("../models/list");
const Card = require("../models/card");
const HttpError = require("../models/httpError");
const { validationResult } = require("express-validator");

const createList = (req, res, next) => {
  const errors = validationResult(req);
  const id = req.body.boardId;

  if (errors.isEmpty()) {
    List.create({ boardId: id, title: req.body.list.title })
      .then((list) => {
        Board.findByIdAndUpdate(id, { $push: { lists: list._id } }).then(() =>
          res.json({ list })
        );
        res.json({ list });
      })
      .catch((err) => {
        next(new HttpError("Creating list failed, please try again", 500));
      });
  } else {
    return next(new HttpError("The input field is empty.", 404));
  }
};

exports.createList = createList;
