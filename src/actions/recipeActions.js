import * as types from './actionTypes';

export function requestRecipes() {
  return {
    type: types.REQUEST_RECIPES
  };
}

export function receiveRecipesSuccess(results) {
  return {
    type: types.RECEIVE_RECIPES_SUCCESS,
    recipes: results,
    receivedAt: Date.now()
  };
}

export function receiveRecipesFailure(error) {
  return {
    type: types.RECEIVE_RECIPES_FAILURE,
    error: error
  };
}
