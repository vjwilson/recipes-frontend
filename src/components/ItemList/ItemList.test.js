import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import ItemList from './ItemList';

describe('ItemList component', function() {
  let props;

  const mockIngredients = [
    'salt',
    'pepper',
    'onion',
    'garlic'
  ];

  describe('with empty array in props', function() {
    it('should render the static component', function() {
      // sanity-check test
      // does it "render without exploding"?
      // see: https://gist.github.com/thevangelist/e2002bc6b9834def92d46e4d92f15874
      props = {
        items: []
      };

      const shallowOutput = shallow(<ItemList {...props} />);

      expect(shallowOutput).to.have.length(1);
    });
  });

  describe('with an array in props', function() {
    it('should render the static component', function() {
      // sanity-check test
      // does it "render without exploding"?
      // see: https://gist.github.com/thevangelist/e2002bc6b9834def92d46e4d92f15874
      props = {
        items: mockIngredients
      };

      const shallowOutput = shallow(<ItemList {...props} />);

      expect(shallowOutput).to.have.length(1);
    });
  });
});
