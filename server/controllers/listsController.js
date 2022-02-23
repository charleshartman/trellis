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
      })
      .catch((err) => {
        next(new HttpError("Creating list failed, please try again", 500));
      });
  } else {
    return next(new HttpError("The input field is empty.", 404));
  }
};

const updateListTitle = (req, res, next) => {
  const errors = validationResult(req);
  const id = req.params.id;
  // Add a guard clause for missing title and position
  const newTitle = req.body.title;

  console.log(req.body);

  if (errors.isEmpty()) {
    List.findByIdAndUpdate(id, {title: newTitle}, {new: true})
      .then((updatedList) => {
        res.json(updatedList);
      })
      .catch((err) => {
        next(new HttpError("Updating list title failed, please try again", 500));
      })
  } else {
    return next(new HttpError("The input field is empty.", 404));
  }
};

exports.createList = createList;
exports.updateListTitle = updateListTitle;
