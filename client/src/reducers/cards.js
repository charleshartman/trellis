export default function cards(state = [], action) {
  switch (action.type) {
    case "FETCH_BOARD_SUCCESS": {
      const cards = action.board.lists.reduce((accum, list) => {
        const filteredCards = list.cards.filter(
          (c) => !state.find((card) => card._id === c._id)
        );
        return accum.concat(filteredCards);
      }, []);
      return state.concat(cards);
    }
    case "FETCH_CARD_SUCCESS": {
      const card = action.card;
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
    case "CREATE_CARD_SUCCESS": {
      const newCard = action.card;
      return state.concat(newCard);
    }
    default:
      return state;
  }
}
