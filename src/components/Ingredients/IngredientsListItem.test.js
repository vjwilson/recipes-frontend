import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import IngredientsListItem from './IngredientsListItem';

describe('IngredientsListItem component', function() {
  let props;

  const mockIngredient = '1 lb. Greenwich spinach';

  beforeEach(function() {
    props = {
      ingredient: mockIngredient,
      onRemove: function() {}
    };
  });

  it('should render the static component', function() {
    const shallowOutput = shallow(<IngredientsListItem {...props} />);

    expect(shallowOutput).to.have.length(1);
  });

  it('should have an unordered list at its root', function() {
    const shallowOutput = shallow(<IngredientsListItem {...props} />);

    expect(shallowOutput.type()).to.equal('li');
  });

  it('should output the appropriate data for each table cell', function() {
    const wrapper = mount(<IngredientsListItem {...props} />);

    expect(wrapper.text()).to.contain(mockIngredient);
  });
});
