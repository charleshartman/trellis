import apiClient from "../lib/ApiClient";
import * as types from "../constants/ActionTypes";

export function createListRequest() {
  return { type: types.CREATE_LIST_REQUEST };
}

export function createListSuccess(list) {
  return { type: types.CREATE_LIST_SUCCESS, list: list };
}

export function updateListTitleSuccess(list) {
  return { type: types.UPDATE_LIST_TITLE_SUCCESS, list: list};
}

export function createList(list, callback) {
  return function (dispatch) {
    dispatch(createListRequest());
    apiClient.createList(list, (data) => {
      dispatch(createListSuccess(data.list));

      if (callback) {
        callback(data.list);
      }
    });
  };
}

export function updateListTitle(id, listInfo, callback) {
  return function (dispatch) {
    apiClient.updateListTitle(id, listInfo, (data) => {
      dispatch(updateListTitleSuccess(data));

      if (callback) {
        callback(data.list);
      }
    });
  }
}
