import * as types from './actionTypes';

export function setRecipeFilter(filter) {
  return { type: types.SET_RECIPE_FILTER, filter: filter };
}

export function clearRecipeFilter() {
  return { type: types.CLEAR_RECIPE_FILTER };
}
