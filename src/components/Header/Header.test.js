import React from 'react';
import { Link } from 'react-router';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import Header from './Header';

describe('Header component', function() {
  let props;

  beforeEach(function() {
    props = {
      user: null,
      login: function() {},
      logout: function() {}
    };
  });

  it('should render the static component', function() {

    const shallowOutput = shallow(<Header user={props.user} login={props.login} logout={props.logout} />);

    expect(shallowOutput).to.have.length(1);
  });

  it('should render an element of the correct type', function() {
    const shallowOutput = shallow(<Header user={props.user} login={props.login} logout={props.logout} />);

    expect(shallowOutput.type()).to.equal('nav');
  });

  it('should render an element with correct classes', function() {
    const shallowOutput = shallow(<Header user={props.user} login={props.login} logout={props.logout} />);

    expect(shallowOutput.hasClass('navbar')).to.be.true;
  });

  it('should have two items in its nav menu', function() {
    const mountedOutput = mount(<Header {...props} />);

    const ticketLink = mountedOutput.find('.navbar__menu-item');

    expect(ticketLink.length).to.equal(3);
  });

  it('should have a link to admin in the last menu item', function() {
    const mountedOutput = mount(<Header {...props} />);

    const ticketLink = mountedOutput.find('.navbar__menu-item').last().find(Link);

    expect(ticketLink.text()).to.equal('Admin');
  });

  it('should contain a login block', function() {
    const shallowOutput = shallow(<Header user={props.user} login={props.login} logout={props.logout} />);

    const loginBlock = shallowOutput.find('.navbar__block');

    expect(loginBlock).to.be.an('object');
  });

  describe('when there is NOT an authenticated user', function() {
    it('should contain a login prompt', function() {
      const shallowOutput = shallow(<Header user={props.user} login={props.login} logout={props.logout} />);

      const authMessage = shallowOutput.find('.navbar__block .navbar__text');

      expect(authMessage.text()).to.contain('Have an account?');
    });

    it('should contain a login link if no authenticated user', function() {
      // props.user is `null` by default
      const shallowOutput = shallow(<Header user={props.user} login={props.login} logout={props.logout} />);

      const authLink = shallowOutput.find('.navbar__block .navbar__link');

      expect(authLink.type()).to.equal('a');
      expect(authLink.text()).to.contain('Login');
    });
  });

  describe('when there is an authenticated user', function() {
    beforeEach(function() {
      props.user = {
        id: 3,
        username: 'gmtester'
      };
    });

    it('should contain the username instead of a login prompt', function() {
      const shallowOutput = shallow(<Header user={props.user} login={props.login} logout={props.logout} />);

      const authMessage = shallowOutput.find('.navbar__block .navbar__text');

      expect(authMessage.text()).to.contain(props.user.username);
    });

    it('should contain a logout link', function() {
      const shallowOutput = shallow(<Header user={props.user} login={props.login} logout={props.logout} />);

      const authLink = shallowOutput.find('.navbar__block .navbar__link');

      expect(authLink.type()).to.equal('a');
      expect(authLink.text()).to.contain('Logout');
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
      const shallowOutput = shallow(<Header user={props.user} login={props.login} logout={props.logout} />);

      const authLink = shallowOutput.find('.navbar__block .navbar__link');

      authLink.simulate('click');

      expect(loginAction.calledOnce).to.be.true;
    });

    it('should call logout function when there is an authenticated user', function() {
      props.user = {
        id: 3,
        username: 'gmtester'
      };
      const shallowOutput = shallow(<Header user={props.user} login={props.login} logout={props.logout} />);

      const authLink = shallowOutput.find('.navbar__block .navbar__link');

      authLink.simulate('click');

      expect(logoutAction.calledOnce).to.be.true;
    });
  });
});
