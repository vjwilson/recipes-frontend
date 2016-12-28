import React from 'react';
import { Link } from 'react-router';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import Header from './Header';
import LoginBox from '../Login/LoginBox';

describe('Header component', function() {
  let props;

  beforeEach(function() {
    props = {
      profile: null,
      login: function() {},
      logout: function() {},
      updateFormField: function() {},
      credentials: {},
      errors: []
    };
  });

  it('should render the static component', function() {

    const shallowOutput = shallow(<Header {...props} />);

    expect(shallowOutput).to.have.length(1);
  });

  it('should render an element of the correct type', function() {
    const shallowOutput = shallow(<Header {...props} />);

    expect(shallowOutput.type()).to.equal('nav');
  });

  it('should render an element with correct classes', function() {
    const shallowOutput = shallow(<Header {...props} />);

    expect(shallowOutput.hasClass('navbar')).to.be.true;
  });

  it('should contain an auth block', function() {
    const shallowOutput = shallow(<Header {...props} />);

    const authBlock = shallowOutput.find('.navbar__block');

    expect(authBlock).to.be.an('object');
  });

  describe('when there is NOT an authenticated user', function() {
    it('should contain a login form', function() {
      const shallowOutput = shallow(<Header {...props} />);

      const authBlock = shallowOutput.find('.navbar__block');
      const firstChild = authBlock.childAt(0);
      expect(firstChild.type()).to.equal(LoginBox);
    });

    it('should have two items in its nav menu', function() {
      const mountedOutput = mount(<Header {...props} />);

      const menuItems = mountedOutput.find('.navbar__menu-item');

      expect(menuItems.length).to.equal(2);
    });

    it('should have a link to categories in the last menu item', function() {
      const mountedOutput = mount(<Header {...props} />);

      const menuLink = mountedOutput.find('.navbar__menu-item').last().find(Link);

      expect(menuLink.text()).to.equal('Categories');
    });
  });

  describe('when there is an authenticated user', function() {
    beforeEach(function() {
      props.profile = {
        username: 'ljenkins',
        email: 'ljenkins@aol.com',
        token: '8675309abc'
      };
    });

    it('should contain the username instead of a login prompt', function() {
      const shallowOutput = shallow(<Header {...props} />);

      const authBlock = shallowOutput.find('.navbar__block');

      expect(authBlock.text()).to.contain(props.profile.username);
    });

    it('should contain a logout link', function() {
      const shallowOutput = shallow(<Header {...props} />);

      const authLink = shallowOutput.find('.navbar__block .navbar__link');

      expect(authLink.type()).to.equal('button');
      expect(authLink.text()).to.contain('Logout');
    });

    it('should have three items in its nav menu', function() {
      const mountedOutput = mount(<Header {...props} />);

      const menuItems = mountedOutput.find('.navbar__menu-item');

      expect(menuItems.length).to.equal(3);
    });

    it('should have a link to admin in the last menu item', function() {
      const mountedOutput = mount(<Header {...props} />);

      const menuLink = mountedOutput.find('.navbar__menu-item').last().find(Link);

      expect(menuLink.text()).to.equal('Admin');
    });
  });

  describe('calling the appropriate action props', function() {
    let loginAction;
    let logoutAction;

    beforeEach(function() {
      loginAction = sinon.spy();
      logoutAction = sinon.spy();

      props.login = loginAction;
      props.logout = logoutAction;
    });

    it('should call login function if no authenticated use', function() {
      const wrapper = mount(<Header {...props} />);

      const authButton = wrapper.find('.form--inline');

      authButton.simulate('submit');

      expect(loginAction.calledOnce).to.be.true;
    });

    it('should call logout function when there is an authenticated user', function() {
      props.profile = {
        id: 3,
        username: 'gmtester'
      };
      const wrapper = mount(<Header {...props} />);

      const authLink = wrapper.find('.navbar__block .navbar__link');

      authLink.simulate('click');

      expect(logoutAction.calledOnce).to.be.true;
    });
  });
});
