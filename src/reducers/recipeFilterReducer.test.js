import { expect } from 'chai';

import * as recipeFilterActions from '../actions/recipeFilterActions';
import recipeFilterReducer from './recipeFilterReducer';


describe('Recipe Filter reducer', function() {
  describe('Set Recipe filter action', function() {
    it('should set a recipe filter on name', function() {
      const stateBefore = {
        name: '',
        author: '',
        ingredients: '',
        directions: '',
        wildcard: ''
      };
      const action = recipeFilterActions.setRecipeFilter({
        name: 'Pie'
      });
      const stateAfter = {
        name: 'Pie',
        author: '',
        ingredients: '',
        directions: '',
        wildcard: ''
      };

      const result = recipeFilterReducer(stateBefore, action);

      expect(result).to.eql(stateAfter);
    });

    it('should set a recipe filter on multiple properties', function() {
      const stateBefore = {
        name: '',
        author: '',
        ingredients: '',
        directions: '',
        wildcard: ''
      };
      const action = recipeFilterActions.setRecipeFilter({
        name: 'Pie',
        ingredients: 'sugar',
        directions: 'carmelize'
      });
      const stateAfter = {
        name: 'Pie',
        author: '',
        ingredients: 'sugar',
        directions: 'carmelize',
        wildcard: ''
      };

      const result = recipeFilterReducer(stateBefore, action);

      expect(result).to.eql(stateAfter);
    });

    it('should override existing filter property', function() {
      const stateBefore = {
        name: 'Pie',
        author: '',
        ingredients: '',
        directions: '',
        wildcard: ''
      };
      const action = recipeFilterActions.setRecipeFilter({
        name: 'Cake',
        author: '',
        ingredients: 'sugar',
        directions: '',
        wildcard: ''
      });
      const stateAfter = {
        name: 'Cake',
        author: '',
        ingredients: 'sugar',
        directions: '',
        wildcard: ''
      };

      const result = recipeFilterReducer(stateBefore, action);

      expect(result).to.eql(stateAfter);
    });
  });

  describe('Clear Recipe filter action', function() {
    it('should clear all recipe filter properties', function() {
      const stateBefore = {
        name: 'Pie',
        author: 'Gensie',
        ingredients: 'sugar',
        directions: 'bake',
        wildcard: 'blueberries'
      };
      const action = recipeFilterActions.clearRecipeFilter();
      const stateAfter = {
        name: '',
        author: '',
        ingredients: '',
        directions: '',
        wildcard: ''
      };

      const result = recipeFilterReducer(stateBefore, action);

      expect(result).to.eql(stateAfter);
    });
  });
});
