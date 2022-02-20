export default function lists(state = [], action) {
  switch (action.type) {
    case "FETCH_BOARD_SUCCESS": {
      const { lists } = action.board;

      return lists.map((list) => {
        // eslint-disable-next-line no-unused-vars
        let { cards, ...listWithoutCards } = list;
        return listWithoutCards;
      });
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
