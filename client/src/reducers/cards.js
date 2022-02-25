export default function cards(state = [], action) {
  switch (action.type) {
    case "FETCH_BOARD_SUCCESS": {
      const cards = action.board.lists.reduce((accum, list) => {
        const filteredCards = list.cards.filter(
          (c) => !state.find((card) => card._id === c._id)
        );
        // filter cards from the server (in list.cards) to include only cards that are not in the state
        return accum.concat(filteredCards);
      }, []);
      return state.concat(cards);
    }
    case "FETCH_CARD_SUCCESS": {
      const card = action.card;
      // if (state) {
      //   return [...state];
      // } else {
      //   return [card];
      //
      const cardFound = state.find((c) => c._id === card._id);

      if (cardFound) {
        return state.map((c) => {
          if (c._id === card._id) {
            return { ...card };
          }
          return c;
        });
      } else {
        return state.concat(card);
      }
    }
    default:
      return state;
  }
}
