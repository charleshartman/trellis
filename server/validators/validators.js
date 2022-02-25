const {check} = require('express-validator');

exports.validateBoard = [check("board.title").not().isEmpty()];
exports.validateList = [check("list.title").not().isEmpty()];
exports.validateListNewTitle = [check("title").not().isEmpty()]
exports.validateCardTitle = [check("card.title").not().isEmpty()];
