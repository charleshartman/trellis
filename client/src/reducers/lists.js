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
    case "CREATE_LIST_SUCCESS": {
      const newList = action.list;
      return state.concat(newList);
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
