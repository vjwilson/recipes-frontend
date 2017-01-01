import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import CategoriesPage from './CategoriesPage';

describe('CategoriesPage component', function() {

  describe('initial render', function() {

    it('should render the static component', function() {
      const shallowOutput = shallow(<CategoriesPage />);

      expect(shallowOutput).to.have.length(1);
    });

    it('should a title that contains the name', function() {
      const wrapper = mount(<CategoriesPage />);

      expect(wrapper.find('h1').text()).to.contain('Categories');
    });
  });
});
