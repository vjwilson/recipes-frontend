import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import fetchMock from 'fetch-mock';
import RecipeEditPage from './RecipeEditPage';
import RecipeForm from './RecipeForm';

describe('RecipeEditPage component', function() {
  let props;

  const mockRecipe = {
    id: 9,
    name: 'D',
    author: 'Paul McCartney',
    ingredients: ['one', 'two', 'three'],
    directions: 'Mix in bowl. Cook for 1 hour.'
  };

  beforeEach(function() {
    props = {
      params: {
        id: mockRecipe.id
      }
    };

    fetchMock.get('*', mockRecipe);
  });

  afterEach(function() {
    fetchMock.restore();
  });

  describe('initial render', function() {

    it('should render the static component', function() {
      const shallowOutput = shallow(<RecipeEditPage {...props} />);

      expect(shallowOutput).to.have.length(1);
    });

    it('should contain a title with an appropriate name', function() {
      const wrapper = mount(<RecipeEditPage {...props} />);

      expect(wrapper.find('h1').text()).to.contain('Edit Recipe');
    });

    it('should a contain a RecipeForm component', function() {
      const wrapper = mount(<RecipeEditPage {...props} />);
      const secondChild = wrapper.childAt(1);

      expect(secondChild.type()).to.equal(RecipeForm);
    });
  });
});
