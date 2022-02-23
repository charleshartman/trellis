# Current stories in current epic

- GET `/api/cards/:id `endpoint
  - Add missing properties to CardSchema based on the api document
  - Add a get route `(/api/cards/:id)` to the api.js file
  - Create a cardsController.js file in controllers folder
  - Define method getCard in cardsController that fetches a card based on its id

- User can view a card
  - When a user clicks on a card, the card is presented in a modal.
  - Wrapping <div> with className card with a <Link> component that redirects you to `/cards/${card._id}`
    - dispatch action to `getCard`
    - Create a cardActions file under actions folder
    - define `getCard` & `getCardSuccess` in cardActions
    - define `FETCH_CARD_SUCCESS` in ActionTypes
    - define `getCard` in ApiClient
    - define `FETCH_CARD_URL` in ApiRoutes
    - define `FETCH_CARD_SUCCESS` case in cards reducer
  - When modal is displayed, url must change to `/cards/:id/`
    - Make sure to use the `useHistory` react-router-dom hook
  - Need to define a new route for the modal
    - `/(boards|cards)/:id`