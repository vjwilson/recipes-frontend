import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function recipeFilterReducer(state = initialState.recipeFilter, action) {
  switch(action.type) {
    case types.SET_RECIPE_FILTER:
      return Object.assign(state, action.filter);

    case types.CLEAR_RECIPE_FILTER:
      return Object.keys(state).reduce((previous, current) => {
        previous[current] = '';
        return previous;
      }, {});

    default:
      return state;
  }
}
