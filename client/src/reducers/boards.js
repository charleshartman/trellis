/* eslint-disable no-unused-vars */
export default function boards(state = [], action) {
  switch (action.type) {
    case "FETCH_BOARDS_SUCCESS": {
      return action.boards;
    }
    case "FETCH_BOARD_SUCCESS": {
      const { lists, ...board } = action.board;
      return [board];
    }
    case "CREATE_BOARD_SUCCESS": {
      const newBoard = action.board;
      return state.concat(newBoard);
    }
    default:
      return state;
  }
}

/*
{
  boards: [{...}],
  lists: [{...}, {...}, {...}],
  cards: [{...}, {...}, {...}, {...}, {}]
}
*/
