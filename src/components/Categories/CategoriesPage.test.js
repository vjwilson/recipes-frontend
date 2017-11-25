import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import fetchMock from 'fetch-mock';

import CategoriesPage from './CategoriesPage';

  const mockCategories = [
    {
      id: 1,
      name: 'Appetizers',
      description: 'Light starters to a meal'
    },
    {
      id: 2,
      name: 'Desserts',
      description: 'Sweet courses to end a meal'
    }
  ];

describe('CategoriesPage component', function() {

  describe('initial render', function() {
    beforeEach(function() {
      fetchMock.get('*', mockCategories);
    });

    afterEach(function() {
      fetchMock.restore();
    });

    it('should render the static component', function() {
      const shallowOutput = shallow(<CategoriesPage />);

      expect(shallowOutput).to.have.length(1);
    });

    it('should have a title that contains the name', function() {
      const wrapper = mount(<CategoriesPage />);

      expect(wrapper.find('h1').text()).to.contain('Categories');
    });
  });
});
