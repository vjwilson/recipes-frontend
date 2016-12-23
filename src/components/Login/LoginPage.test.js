import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import LoginPage from './LoginPage';

describe('LoginPage component', function() {

  describe('initial render', function() {

    it('should render the static component', function() {
      const shallowOutput = shallow(<LoginPage />);

      expect(shallowOutput).to.have.length(1);
    });

    it('should a title that contains the name', function() {
      const wrapper = mount(<LoginPage />);

      expect(wrapper.find('h1').text()).to.contain('Login');
    });
  });
});
