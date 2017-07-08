import { combineReducers } from 'redux';
import recipeFilter from './recipeFilterReducer';

const rootReducer = combineReducers({
  recipeFilter
});

export default rootReducer;
