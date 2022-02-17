const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Card = require('./card')

const ListSchema = new Schema({
  title: {
    type: String,
    required: [true, 'The List title is required'],
    trim: true,
  },
  boardId: {
    type: Number,
    required: true,
  },
  { timestamps: true },
  position: {
    type: Number,
    required: true,
  },
  cards: [{ type: Schema.Types.ObjectId, ref: 'Card' }],

});

const List = mongoose.model('List', ListSchema);

module.exports = List = mongoose.model('list', ListSchema);
