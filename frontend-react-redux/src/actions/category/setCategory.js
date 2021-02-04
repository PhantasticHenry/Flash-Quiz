import * as types from "../actionTypes";

export const setCategory = (category) => ({
  type: types.SET_CATEGORY,
  payload: category,
});
