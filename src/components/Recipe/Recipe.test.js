import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Recipe from './Recipe';

describe('Recipe component', function() {
  let props;

  const mockRecipeIncomplete = {
    id: 1,
    name: 'B',
    ingredients: ['one', 'two', 'three']
  };

  const mockRecipeComplete = {
    id: 1,
    name: 'B',
    author: 'John Lennon',
    ingredients: ['one', 'two', 'three'],
    directions: 'Mix well. Chill.'
  };

  describe('with incomplete object in props', function() {
    it('should render the static component', function() {
      // sanity-check test
      // does it "render without exploding"?
      // see: https://gist.github.com/thevangelist/e2002bc6b9834def92d46e4d92f15874
      props = {
        recipe: mockRecipeIncomplete
      };

      const shallowOutput = shallow(<Recipe {...props} />);

      expect(shallowOutput).to.have.length(1);
    });
  });

  describe('with complete object in props', function() {
    it('should render the static component', function() {
      // sanity-check test
      // does it "render without exploding"?
      // see: https://gist.github.com/thevangelist/e2002bc6b9834def92d46e4d92f15874
      props = {
        recipe: mockRecipeComplete
      };

      const shallowOutput = shallow(<Recipe {...props} />);

      expect(shallowOutput).to.have.length(1);
    });
  });
});
