import apiClient from "../lib/ApiClient";
import * as types from "../constants/ActionTypes";

export function fetchCardSuccess(card) {
  return { type: types.FETCH_CARD_SUCCESS, card };
}

export function fetchCard(id) {
  return function (dispatch) {
    // dispatch(fetchBoardRequest());
    apiClient.getCard(id, (data) => dispatch(fetchCardSuccess(data)));
  };
}
