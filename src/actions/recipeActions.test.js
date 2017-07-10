import { expect } from 'chai';
import sinon from 'sinon';
import * as recipeActions from './recipeActions';
import * as types from './actionTypes';

describe('Recipe actions', function() {
  describe('Request Recipes action', function() {
    it('should return the action to request recipes', function() {
      // arrange
      const expectedAction = {
        type: types.REQUEST_RECIPES
      };

      // act
      const action = recipeActions.requestRecipes();

      // asset
      expect(action).to.eql(expectedAction);
    });
  });

  describe('Receive Recipes actions', function() {
    let clock;

    beforeEach(function() {
      const now = new Date().getTime();
      clock = sinon.useFakeTimers(now);
    });

    afterEach(function() {
      // sandbox.restore();
      clock.restore();
    });

    it('should return the action for receive recipes success', function() {
      // arrange
      const results = [
        {
          id: 3,
          name: 'Pound Cake'
        },
        {
          id: 9,
          name: 'Apple Pie'
        }
      ];
      const expectedAction = {
        type: types.RECEIVE_RECIPES_SUCCESS,
        recipes: results,
        receivedAt: Date.now()
      };
      // act
      const action = recipeActions.receiveRecipesSuccess(results);

      // asset
      expect(action).to.eql(expectedAction);
    });

    it('should return the action for receive recipes failure', function() {
      // arrange
      const error = 'Server error';
      const expectedAction = {
        type: types.RECEIVE_RECIPES_FAILURE,
        error: error
      };
      // act
      const action = recipeActions.receiveRecipesFailure(error);

      // asset
      expect(action).to.eql(expectedAction);
    });
  });
});
