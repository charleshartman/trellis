# Current stories in current epic

- User can edit the name of a list from the board view.

  - use ternary to hide/show <p> title vs <input> title
  - when user clicks '...' span, list.title becomes editable
  - when user presses return/enter title is updated
    - dispatch action to updateListTitle
    - define updateListTitle & updateListTitleSuccess in listActions
    - define UPDATE_LIST_SUCCESS in ActionTypes
    - define updateListTitle in ApiClient
    - define UPDATE_LIST_TITLE_URL in ApiRoutes
    - define UPDATE_LIST_SUCCESS case in lists reducer

- PUT /api/lists/:id endpoint

  - define updateListTitle on listsController
  - define PUT route (/lists/:id) in api.js
