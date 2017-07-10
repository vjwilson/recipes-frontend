import { expect } from 'chai';
import { createStore } from 'redux';

import rootReducer from '../reducers';
import initialState from '../reducers/initialState';
import * as recipeFilterActions from '../actions/recipeFilterActions';

describe('Store', function() {
  it('should handle setting the recipe filter', function() {
    // arrange
    const presetState = JSON.parse(JSON.stringify(initialState));
    const store = createStore(rootReducer, presetState);
    const newFilter = {
      name: 'Stew',
      author: 'Smith'
    };

    // act
    const action = recipeFilterActions.setRecipeFilter(newFilter);
    store.dispatch(action);

    // assert
    const actual = store.getState().recipeFilter;
    const expected = {
      name: 'Stew',
      author: 'Smith',
      ingredients: '',
      directions: '',
      wildcard: ''
    };
    expect(actual).to.eql(expected);
  });

  it('should handle clearing the recipe filter', function() {
    // arrange
    const presetState = JSON.parse(JSON.stringify(initialState));
    presetState.recipeFilter.author = 'Gordon';
    const store = createStore(rootReducer, presetState);

    // act
    const action = recipeFilterActions.clearRecipeFilter();
    store.dispatch(action);

    // assert
    const actual = store.getState().recipeFilter;
    const expected = {
      name: '',
      author: '',
      ingredients: '',
      directions: '',
      wildcard: ''
    };
    expect(actual).to.eql(expected);
  });
});
