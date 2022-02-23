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
    case "UPDATE_LIST_TITLE_SUCCESS": {
      const updatedList = action.list;
      return state.map(list => {
        if (updatedList._id === list._id) {
          return updatedList;
        } else {
          return list;
        }
      });
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
