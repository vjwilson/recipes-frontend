import { expect } from 'chai';
import * as recipeFilterActions from './recipeFilterActions';
import * as types from './actionTypes';

describe('Recipe Filter actions', function() {
  describe('Set Recipe filter action', function() {
    it('should set a recipe filter on name', function() {
      // arrange
      const recipeFilter = {
        name: 'cake',
        author: '',
        ingredients: '',
        directions: '',
        wildcard: ''
      };
      const expectedAction = {
        type: types.SET_RECIPE_FILTER,
        filter: recipeFilter
      };

      // act
      const action = recipeFilterActions.setRecipeFilter(recipeFilter);

      // asset
      expect(action).to.eql(expectedAction);
    });

    it('should set a recipe filter on name and author', function() {
      // arrange
      const recipeFilter = {
        name: 'Cake',
        author: 'Gensie',
        ingredients: '',
        directions: '',
        wildcard: ''
      };
      const expectedAction = {
        type: types.SET_RECIPE_FILTER,
        filter: recipeFilter
      };

      // act
      const action = recipeFilterActions.setRecipeFilter(recipeFilter);

      // asset
      expect(action).to.eql(expectedAction);
    });

    it('should set a recipe filter on wildcard', function() {
      // arrange
      const recipeFilter = {
        name: '',
        author: '',
        ingredients: '',
        directions: '',
        wildcard: 'ice'
      };
      const expectedAction = {
        type: types.SET_RECIPE_FILTER,
        filter: recipeFilter
      };

      // act
      const action = recipeFilterActions.setRecipeFilter(recipeFilter);

      // asset
      expect(action).to.eql(expectedAction);
    });
  });

  describe('Clear Recipe filter action', function() {
    it('should clear the recipe filter', function() {
      // arrange
      const expectedAction = {
        type: types.CLEAR_RECIPE_FILTER
      };

      // act
      const action = recipeFilterActions.clearRecipeFilter();

      // asset
      expect(action).to.eql(expectedAction);
    });
  });
});
