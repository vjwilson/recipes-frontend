import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import RecipeList from './RecipeList';

describe('RecipeList component', function() {
  let props;

  const mockRecipes = [
    {
      id: 1,
      name: 'B',
      author: 'John Lennon',
      ingredients: ['one', 'two', 'three'],
      directions: 'Mix well. Chill.'
    },
    {
      id: 2,
      name: 'D',
      author: 'Paul McCartney',
      ingredients: ['one', 'two', 'three'],
      directions: 'Mix in bowl. Cook for 1 hour.'
    },
    {
      id: 3,
      name: 'A',
      author: 'George Harrison',
      ingredients: ['one', 'two', 'three'],
      directions: 'Combine ingredients.'
    },
    {
      id: 4,
      name: 'C',
      author: 'Ringo Starr',
      ingredients: ['one', 'two', 'three'],
      directions: 'D is an unnamed extra.'
    }
  ];

  describe('with empty array in props', function() {
    it('should render the static component', function() {
      // sanity-check test
      // does it "render without exploding"?
      // see: https://gist.github.com/thevangelist/e2002bc6b9834def92d46e4d92f15874
      props = {
        recipes: []
      };

      const shallowOutput = shallow(<RecipeList {...props} />);

      expect(shallowOutput).to.have.length(1);
    });
  });

  describe('with an array in props', function() {
    it('should render the static component', function() {
      // sanity-check test
      // does it "render without exploding"?
      // see: https://gist.github.com/thevangelist/e2002bc6b9834def92d46e4d92f15874
      props = {
        recipes: mockRecipes
      };

      const shallowOutput = shallow(<RecipeList {...props} />);

      expect(shallowOutput).to.have.length(1);
    });
  });
});
