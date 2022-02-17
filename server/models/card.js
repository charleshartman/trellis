const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CardSchema = new Schema({
  title: {
    type: String,
    required: [true, "The Card title is required"],
  },
  dueDate: {
    type: Date,
  },
  labels: [
    {
      type: String,
    },
  ],
  description: {
    type: String,
    required: [true, "A desciption is required"],
  },
  listId: {
    type: Number,
    required: true,
  },
  boardId: {
    type: Number,
    required: true,
  },
  position: {
    type: Number,
    required: true,
  },
  commentsCount: {
    type: Number,
  },
});

const Card = mongoose.model("Card", CardSchema);

module.exports = Card = mongoose.model("card", CardSchema);
