import { call, put, takeLatest } from 'redux-saga/effects';

import * as types from '../actions/actionTypes';
import { receiveRecipesSuccess, receiveRecipesFailure } from '../actions/recipeActions';

import { getRecipes } from '../api/recipeApi';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser() {
   try {
      const recipes = yield call(getRecipes);
      yield put(receiveRecipesSuccess(recipes));
   } catch (e) {
      yield put(receiveRecipesFailure(e));
   }
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* getUsersSaga() {
  yield takeLatest(types.REQUEST_RECIPES, fetchUser);
}

export default getUsersSaga;
