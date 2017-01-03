import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import IngredientsList from './IngredientsList';

describe('IngredientsList component', function() {
  let props;

  const mockIngredients = [
    '1 lb. Greenwich spinach',
    '3 Tbsp. olive oil',
    '1 tsp. salt',
    '1/4 tsp. pepper'
  ];

  beforeEach(function() {
    props = {
      ingredients: mockIngredients,
      onRemove: function() {}
    };
  });

  it('should render the static component', function() {
    const shallowOutput = shallow(<IngredientsList {...props} />);

    expect(shallowOutput).to.have.length(1);
  });

  it('should have an unordered list at its root', function() {
    const shallowOutput = shallow(<IngredientsList {...props} />);

    expect(shallowOutput.type()).to.equal('ul');
  });

  it('should output the appropriate data for each table cell', function() {
    const wrapper = mount(<IngredientsList {...props} />);

    expect(wrapper.childAt(0).text()).to.contain(mockIngredients[0]);
    expect(wrapper.childAt(1).text()).to.contain(mockIngredients[1]);
    expect(wrapper.childAt(2).text()).to.contain(mockIngredients[2]);
    expect(wrapper.childAt(3).text()).to.contain(mockIngredients[3]);
  });
});
