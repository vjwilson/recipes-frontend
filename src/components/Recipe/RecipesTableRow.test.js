import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import RecipesTableRow from './RecipesTableRow';

describe('RecipesTableRow component', function() {
  let props;

  const mockRecipe = {
    id: 1,
    name: 'B',
    author: 'John Lennon',
    ingredients: ['one', 'two', 'three'],
    directions: 'Mix well. Bake at 350 for 2 hours. Chill for 45 minutes.'
  };

  beforeEach(function() {
    props = {
      recipe: mockRecipe,
      onDelete: function() {}
    };
  });

  describe('with complete object in props', function() {
    it('should render the static component', function() {
      const shallowOutput = shallow(<RecipesTableRow {...props} />);

      expect(shallowOutput).to.have.length(1);
    });

    it('should have a table row at its root', function() {
      const shallowOutput = shallow(<RecipesTableRow {...props} />);

      expect(shallowOutput.is('tr')).to.be.true;
    });

    it('should only contain multiple table cells as children', function() {
      const shallowOutput = shallow(<RecipesTableRow {...props} />);
      const childElements = shallowOutput.children();
      const tableDataElements = childElements.filter('td');

      expect(tableDataElements.length).to.equal(childElements.length);
      expect(tableDataElements).to.have.length.above(1);
    });

    it('should output the appropriate data for each table cell', function() {
      const shallowOutput = shallow(<RecipesTableRow {...props} />);

      expect(shallowOutput.childAt(0).text()).to.contain(mockRecipe.name);
      expect(shallowOutput.childAt(1).text()).to.contain(mockRecipe.author);
      expect(shallowOutput.childAt(2).text()).to.contain(mockRecipe.ingredients[0]);
      expect(shallowOutput.childAt(3).text()).to.contain(mockRecipe.directions.substr(0, 3));
      expect(shallowOutput.childAt(3).text().substr(-3)).to.equal('...');
    });
  });
});
