import { expect } from 'chai';
import initialState from './initialState';

describe('initialState constants', function() {
  it('should supply an empty recipe filter object', () => {
    expect(initialState.recipeFilter).to.eql({
      name: '',
      author: '',
      ingredients: '',
      directions: '',
      wildcard: ''
    });
  });
});
