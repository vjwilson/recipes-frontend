import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import AdminPage from './AdminPage';

describe('AdminPage component', function() {

  describe('initial render', function() {

    it('should render the static component', function() {
      const shallowOutput = shallow(<AdminPage />);

      expect(shallowOutput).to.have.length(1);
    });

    it('should a title that contains the name', function() {
      const wrapper = mount(<AdminPage />);

      expect(wrapper.find('h1').text()).to.contain('Admin');
    });
  });
});
