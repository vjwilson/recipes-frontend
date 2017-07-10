import { combineReducers } from 'redux';
import recipes from './recipeReducer';
import recipeFilter from './recipeFilterReducer';

const rootReducer = combineReducers({
  recipes,
  recipeFilter
});

export default rootReducer;
