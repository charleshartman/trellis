const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CardSchema = new Schema(
  {
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
      type: Schema.Types.ObjectId,
      ref: "List",
      required: true,
    },
    boardId: {
      type: Schema.Types.ObjectId,
      ref: "Board",
      required: true,
    },
    position: {
      type: Number,
      required: true,
    },
    commentsCount: {
      type: Number,
    },
    archived: {
      type: Boolean,
      default: false,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
  },
  { timestamps: true }
);

const Card = mongoose.model("Card", CardSchema);

module.exports = Card;
