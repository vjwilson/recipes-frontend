import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function recipeReducer(state = initialState.recipes, action) {
  switch(action.type) {
    case types.REQUEST_RECIPES:
      return Object.assign({}, state, {
        isFetching: true,
        error: null
      });

    case types.RECEIVE_RECIPES_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.recipes,
        lastUpdated: action.receivedAt
      });

    case types.RECEIVE_RECIPES_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        error: true
      });

    default:
      return state;
  }
}
